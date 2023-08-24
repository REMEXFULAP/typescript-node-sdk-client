import { RemesitaSDK } from 'remesita-typescript-node-sdk-client';

describe('RemesitaSDK Functional Tests', () => {
    let sdk: RemesitaSDK;

    beforeAll(() => {
        sdk = new RemesitaSDK('YOUR_API_KEY', 'YOUR_API_SECRET');
    });

    it('should authenticate the user', async () => {
        const response = await sdk.authenticate();
        expect(response.success).toBe(true);
    });

    it('should retrieve a list of businesses', async () => {
        const businesses = await sdk.getBusinessList();
        expect(businesses).toBeInstanceOf(Array);
    });

    it('should transfer balance between cards', async () => {
        const response = await sdk.transferBetweenCards({
            from: 'SOURCE_CARD_NUMBER',
            to: 'DESTINATION_CARD_NUMBER',
            amount: 100,
            memo: 'Test Transfer',
            currency: 'USD'
        });
        expect(response.success).toBe(true);
    });

    it('should toggle card lock status', async () => {
        const response = await sdk.toggleCardLock('CARD_NUMBER');
        expect(response.success).toBe(true);
    });

    it('should retrieve card transactions', async () => {
        const transactions = await sdk.getCardTransactions('CARD_NUMBER', 1, 25);
        expect(transactions).toBeInstanceOf(Array);
    });

    it('should retrieve a list of prepaid cards', async () => {
        const cards = await sdk.getCards();
        expect(cards).toBeInstanceOf(Array);
    });

    it('should retrieve a list of orders', async () => {
        const orders = await sdk.getOrders({ pg: 1, pgSize: 25 });
        expect(orders).toBeInstanceOf(Array);
    });

    it('should retrieve a list of P2P operations', async () => {
        const p2pOperations = await sdk.getP2POperations({ pg: 1, pgSize: 25 });
        expect(p2pOperations).toBeInstanceOf(Array);
    });

    it('should create a payment link', async () => {
        const paymentLink = await sdk.createPaymentLink({
            businessUnitId: 'BUSINESS_ID',
            amount: 100,
            concept: 'Test Payment',
            ipnUrl: 'http://example.com/ipn',
            successUrl: 'http://example.com/success',
            cancelUrl: 'http://example.com/cancel',
            customId: 'TEST123',
            payerName: 'John Doe',
            payerPhone: '555-1234',
            payerEmail: 'john@example.com'
        });
        expect(paymentLink).toHaveProperty('url');
    });

    it('should retrieve balance data', async () => {
        const balance = await sdk.getBalance();
        expect(balance).toHaveProperty('available');
    });
});
