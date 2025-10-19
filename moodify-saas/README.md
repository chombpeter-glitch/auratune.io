# MooD DJ - Playlists Emocionales con IA

MooD DJ es una aplicación SaaS que utiliza inteligencia artificial para crear playlists personalizadas de Spotify basadas en tus emociones.

## Características

- 🎵 **Generación de Playlists con IA**: Describe cómo te sientes y la IA creará la playlist perfecta
- 🎭 **Análisis Emocional**: Análisis profundo de tu estado emocional usando GPT-4
- 🎧 **Integración con Spotify**: Guarda playlists directamente en tu cuenta de Spotify
- 🔐 **Autenticación Segura**: Login con Google OAuth y email/contraseña usando Supabase
- 💳 **Sistema de Créditos**: 2 créditos de prueba gratuitos, suscripción premium para acceso ilimitado
- 🌍 **Multiidioma**: Soporte para español, inglés y chino con detección automática
- ⚡ **Resultados Instantáneos**: Obtén tu playlist en segundos
- 🎨 **Interfaz Moderna**: Diseño oscuro y elegante con Tailwind CSS

## Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Base de Datos**: Supabase (PostgreSQL)
- **Autenticación**: Supabase Auth (Google OAuth + Email/Password)
- **IA**: Vercel AI SDK con GPT-4o-mini
- **Estilos**: Tailwind CSS v4 + shadcn/ui
- **API**: Spotify Web API
- **TypeScript**: Para type safety completo
- **Pagos**: Bridge Onramp (Crypto payments con Solana)

## Configuración

### 1. Variables de Entorno

Las siguientes variables ya están configuradas en el proyecto de Vercel:

\`\`\`env
# Supabase (configuradas automáticamente por la integración)
SUPABASE_SUPABASE_URL=your-supabase-url
SUPABASE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Spotify OAuth (para integración de música)
AUTH_SPOTIFY_ID=your-spotify-client-id
AUTH_SPOTIFY_SECRET=your-spotify-client-secret

# Site URL (para OAuth redirects)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
\`\`\`

**Nota**: No incluyas valores reales de API keys en el código. Todas las variables sensibles deben configurarse en Vercel.

### 2. Configurar Base de Datos

Los scripts SQL en la carpeta `/scripts` crean automáticamente:
- Tabla `profiles` con información de usuario
- Tabla `subscriptions` para gestionar suscripciones
- Sistema de créditos (2 créditos gratuitos por defecto)
- Row Level Security (RLS) para proteger datos

### 3. Configurar Spotify App

1. Ve a [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Crea una nueva aplicación
3. En la configuración de la app:
   - **Website**: Tu URL de producción
   - **Redirect URIs**: `https://tu-dominio.com/auth/callback`
4. Copia el Client ID y Client Secret a las variables de entorno en Vercel

### 4. Autenticación

La app soporta dos métodos de autenticación:
- **Google OAuth**: Login con cuenta de Google
- **Email/Contraseña**: Registro tradicional con verificación de email

### 5. Sistema de Créditos y Suscripciones

- **Usuarios Gratuitos**: 2 créditos de prueba (1 crédito = 1 playlist)
- **Usuarios Premium**: Acceso ilimitado
- **Pagos**: Integración con Bridge para pagos en criptomonedas (Solana)

## Cómo Funciona

1. **Registro/Login**: Los usuarios se registran con Google o email/contraseña
2. **Descripción Emocional**: El usuario describe cómo se siente en su idioma
3. **Detección de Idioma**: El sistema detecta automáticamente el idioma (ES/EN/ZH)
4. **Análisis con IA**: GPT-4 analiza la emoción y genera recomendaciones musicales
5. **Búsqueda en Spotify**: Se buscan canciones reales que coincidan
6. **Verificación de Créditos**: Se verifica que el usuario tenga créditos disponibles
7. **Creación de Playlist**: La playlist se crea y se descuenta 1 crédito

## Estructura del Proyecto

\`\`\`
├── app/
│   ├── api/
│   │   ├── generate-playlist/      # AI emotion analysis + credit check
│   │   ├── search-tracks/          # Spotify track search
│   │   └── save-to-spotify/        # Playlist creation
│   ├── auth/
│   │   ├── login/                  # Login page
│   │   ├── signup/                 # Signup page
│   │   ├── callback/               # OAuth callback
│   │   └── verify-email/           # Email verification
│   ├── dashboard/                  # Main app dashboard
│   └── page.tsx                    # Landing page
├── components/
│   ├── playlist-generator.tsx      # Main generator UI
│   ├── playlist-result.tsx         # Results display
│   ├── subscription-banner.tsx     # Credits/subscription info
│   └── ui/                         # shadcn/ui components
├── lib/
│   ├── supabase/                   # Supabase clients
│   ├── spotify.ts                  # Spotify API utilities
│   └── i18n.ts                     # Internationalization
├── scripts/
│   └── *.sql                       # Database setup scripts
└── middleware.ts                   # Auth middleware
\`\`\`

## Seguridad

- ✅ Todas las API keys están en variables de entorno
- ✅ Row Level Security (RLS) en Supabase
- ✅ Autenticación segura con Supabase Auth
- ✅ Middleware protege rutas privadas
- ✅ Validación de créditos en el servidor
- ✅ No hay datos sensibles en el código

## Despliegue

La forma más fácil de desplegar es usando [Vercel](https://vercel.com):

1. Haz push de tu código a GitHub
2. Importa el proyecto en Vercel
3. Configura las variables de entorno en Vercel
4. Ejecuta los scripts SQL en Supabase
5. Actualiza las URLs en Spotify Dashboard

## Licencia

MIT
