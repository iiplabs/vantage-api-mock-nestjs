# vantage-api-mock-nextjs

Test service for Vantage SDK. Implemented using NextJS framework.

## Build Setup

1. Add ".env" file to the root folder and set environmental variables in it. Use .env.example for list of required variables

## Docker

### Redeploy an individual service

```bash
docker compose up --no-deps -d vantage-api-mock-nextjs
```

### Connect to logs of an individual service

```bash
docker logs --tail 50 --follow --timestamps vantage-api-mock-nextjs
```
