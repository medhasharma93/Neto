from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.router import api_router
from app.core.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="A personal finance tracker API",
    # Auto-generated API docs available at /docs
    docs_url="/docs",
    redoc_url="/redoc",
)

# CORS — allows the React frontend (running on a different port) to talk to this API
# Think of it like allowing cross-origin requests in ASP.NET Core
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Vite's default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register all API routes under /api/v1
app.include_router(api_router, prefix="/api/v1")


@app.get("/health")
def health_check():
    """Simple endpoint to confirm the server is running."""
    return {"status": "ok", "app": settings.APP_NAME, "version": settings.APP_VERSION}
