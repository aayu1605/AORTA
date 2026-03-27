# AISHE 2024–25 Data Ingestion (Placeholder)

This folder will hold ingestion scripts and normalized tables for the AISHE-backed college directory.

- Source: AISHE 2024–25 directory (official releases)
- Scope: Government institutions, NAAC scores, fees, courses, seat matrix
- Compliance: Cite AISHE and Ministry of Education; sync schedule TBD

Suggested pipeline:
1. Download raw CSV/XLSX from AISHE portal
2. Normalize to schema in `schemas/colleges.schema.json`
3. Load into PostgreSQL (`db` service)
4. Expose via backend `/api/v1/colleges` with filters (state, course, NAAC, fees)

Note: Actual AISHE files are not included here. Add them locally or via a secure ingestion job.






