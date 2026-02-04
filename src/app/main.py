from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from .db import get_db
from .models import MembershipPlan, Member, Invoice, Payment

app = FastAPI(title="Gym Studio Finance Portal")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/members/{member_id}/balance")
def member_balance(member_id: int, db: Session = Depends(get_db)):
    # total invoiced
    total_invoices = db.query(func.coalesce(func.sum(Invoice.amount), 0)).filter(Invoice.member_id == member_id).scalar()
    # total paid (via payments joined to invoices for this member)
    total_paid = (
        db.query(func.coalesce(func.sum(Payment.amount), 0))
        .join(Invoice, Payment.invoice_id == Invoice.id)
        .filter(Invoice.member_id == member_id)
        .scalar()
    )
    balance = float(total_invoices) - float(total_paid)
    return {"member_id": member_id, "total_invoiced": float(total_invoices), "total_paid": float(total_paid), "balance": balance}