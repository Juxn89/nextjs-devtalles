# Flujo de Trabajo con Prisma en Next.js

## 1. Desarrollo Local (Cambios en el Schema)

```bash
# 1. Modificar prisma/schema.prisma
# 2. Crear y aplicar migración
npx prisma migrate dev --name descripcion_del_cambio

# 3. Generar cliente (se hace automáticamente con migrate dev)
npx prisma generate

# 4. (Opcional) Poblar con datos de prueba
npx prisma db seed
```

## 2. Producción (Deploy)

```bash
# 1. Aplicar migraciones pendientes
npx prisma migrate deploy

# 2. Generar cliente
npx prisma generate
```

## 3. Comandos Útiles

### Reset completo (desarrollo)
```bash
npx prisma migrate reset  # Borra DB, aplica migraciones y ejecuta seed
```

### Sincronizar schema con DB existente
```bash
npx prisma db pull        # Actualiza schema basado en DB
npx prisma generate       # Genera cliente con nuevos cambios
```

### Verificar estado
```bash
npx prisma migrate status  # Ver migraciones pendientes
npx prisma studio         # Interfaz visual de la DB
```

## 4. Configuración del Seed

En `package.json`:
```json
{
  "prisma": {
    "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
  }
}
```