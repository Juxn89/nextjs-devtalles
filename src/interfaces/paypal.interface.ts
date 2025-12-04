export interface PayPalAuthResult {
  scope: string
  access_token: string
  token_type: string
  app_id: string
  expires_in: number
  nonce: string
}

export interface PayPalOrdersStatusResponse {
  id: string
  intent: string
  status: 'CREATED' | 'SAVED' | 'APPROVED' | 'VOIDED' | 'COMPLETED' | 'PAYER_ACTION_REQUIRED'
  purchase_units: PurchaseUnit[]
  create_time: string
  links: Link[]
}

export interface PurchaseUnit {
  reference_id: string
  amount: Amount
  payee: Payee
  supplementary_data: SupplementaryData
	invoice_id: string
}

export interface Amount {
  currency_code: string
  value: string
}

export interface Payee {
  email_address: string
  merchant_id: string
}

export interface SupplementaryData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tax_nexus: any[]
}

export interface Link {
  href: string
  rel: string
  method: string
}
