from fastapi import APIRouter

# This is the main router for API version 1
# All endpoints will be registered here and prefixed with /api/v1
api_router = APIRouter()

# We will add individual feature routers here as we build them:
# from app.api.v1.endpoints import auth, transactions, categories
# api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
# api_router.include_router(transactions.router, prefix="/transactions", tags=["transactions"])
# api_router.include_router(categories.router, prefix="/categories", tags=["categories"])
