# REMESITA SDK

Este SDK proporciona una interfaz fácil de usar para interactuar con la API de REMESITA.

## Instalación

```bash
npm install remesita-typescript-node-sdk-client --save
```

## Uso

Primero, importa el SDK y crea una instancia:

```typescript
import { RemesitaSDK } from 'remesita-typescript-node-sdk-client';

const sdk = new RemesitaSDK('YOUR_API_KEY', 'YOUR_API_SECRET');
```

### Autenticación

Autentica al usuario con `api_key` y `api_secret`.

```typescript
const authResponse = await sdk.authenticate();
```

### Obtener lista de negocios

Devuelve una lista de todos los negocios registrados en remesita.

```typescript
const businesses = await sdk.getBusinessList();
```

### Transferir saldo entre cuentas

Permite transferir saldo entre dos cuentas Remesita especificadas por los números de tarjeta Visa.

```typescript
const transferResponse = await sdk.transferBetweenCards({
    from: 'SOURCE_CARD_NUMBER',
    to: 'DESTINATION_CARD_NUMBER',
    amount: 100,
    memo: 'Transfer memo',
    currency: 'USD'
});
```

### Bloquear o desbloquear una tarjeta

Cambia el estado de bloqueo de una tarjeta específica.

```typescript
const toggleResponse = await sdk.toggleCardLock('CARD_NUMBER');
```

### Obtener transacciones de una tarjeta

Recupera una lista paginada de transacciones para una tarjeta específica.

```typescript
const transactions = await sdk.getCardTransactions('CARD_NUMBER', 1, 25);
```

### Obtener lista de tarjetas prepagadas

Devuelve una lista de todas las tarjetas prepagadas en el sistema.

```typescript
const cards = await sdk.getCards();
```

### Obtener una lista de órdenes

Recupera una lista paginada de órdenes.

```typescript
const orders = await sdk.getOrders({ pg: 1, pgSize: 25, start: '2023-01-01', end: '2025-01-01', status: 'start' });
```

### Obtener una lista de operaciones P2P

Recupera una lista paginada de operaciones P2P.

```typescript
const p2pOperations = await sdk.getP2POperations({ pg: 1, pgSize: 25, start: '2023-01-01', end: '2025-01-01' });
```

### Generar un link de pago

Crea un link de pago basado en los detalles proporcionados.

```typescript
const paymentLink = await sdk.createPaymentLink({
    businessUnitId: 'BUSINESS_ID',
    amount: 100,
    concept: 'Payment for services',
    ipnUrl: 'http://example.com/ipn',/*opcional*/
    successUrl: 'http://example.com/success',/*opcional*/
    cancelUrl: 'http://example.com/cancel',/*opcional*/
    customId: 'ID12345',/*opcional*/
    payerName: 'John Doe', /*opcional*/
    payerPhone: '555-1234',/*opcional*/
    payerEmail: 'john@example.com'/*opcional*/
});
```

### Obtener datos de balance

Devuelve el balance y otros detalles relacionados.

```typescript
const balance = await sdk.getBalance();
```

## Modelos

El SDK define varios modelos para ayudarte a trabajar con la data:

- `Card`: Representa una tarjeta en el sistema.
- `Order`: Representa una orden.
- `P2POperation`: Representa una operación P2P.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request en GitHub.

## Licencia

MIT
