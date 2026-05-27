// ─── Enums ───────────────────────────────────────────────────────────────────

export type TransactionType = 'INCOME' | 'EXPENSE'

// ─── User ─────────────────────────────────────────────────────────────────────

export interface User {
  id: string
  full_name: string
  email: string
  created_at: string
}

// ─── Category ─────────────────────────────────────────────────────────────────

export interface Category {
  id: string
  name: string
  type: TransactionType
  color: string
  is_default: boolean
  user_id: string | null
  created_at: string
}

// ─── Transaction ──────────────────────────────────────────────────────────────

export interface Transaction {
  id: string
  amount: number
  type: TransactionType
  description: string | null
  date: string
  category_id: string
  category: Category
  user_id: string
  created_at: string
  updated_at: string
}

// ─── Monthly Summary ──────────────────────────────────────────────────────────

export interface MonthlySummary {
  year: number
  month: number
  total_income: number
  total_expenses: number
  net_savings: number
  category_breakdown: CategoryBreakdown[]
}

export interface CategoryBreakdown {
  category: Category
  total: number
}

// ─── API Auth ─────────────────────────────────────────────────────────────────

export interface AuthTokens {
  access_token: string
  token_type: string
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  full_name: string
  email: string
  password: string
}
