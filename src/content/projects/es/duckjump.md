---
title: "duckJump"
description: "Bastión de acceso web clientless para hosts SSH, RDP y VNC con gestión de accesos privilegiados (PAM), bóveda de credenciales cifrada con AES-256-GCM, grabación de sesiones y cadena de auditoría a prueba de manipulación."
tags: ["Go", "Rust", "SSH / RDP / VNC", "PAM", "AES-256-GCM", "OIDC / Keycloak", "WebSockets"]
category: "Seguridad & Infraestructura"
github: "https://github.com/leandrofus/duckJump"
featured: true
order: 4
lang: "es"
---

Reinvención desde cero de soluciones como Apache Guacamole: gateway en un único binario Go y daemon de sesión en Rust (`duckjumpd`) con protocolo binario nativo DJTP. Permite conexión segura en el navegador sin clientes locales, permisos con expiración Just-in-Time, grabación de sesiones hacia S3/MinIO y trazabilidad inmutable de accesos corporativos.
