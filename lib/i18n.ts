export type Locale = "es" | "en" | "zh"

export const translations = {
  es: {
    // Header
    "header.features": "Características",
    "header.howItWorks": "Cómo Funciona",
    "header.start": "Comenzar",

    // Hero
    "hero.badge": "Potenciado por Inteligencia Artificial",
    "hero.title": "Playlists que entienden",
    "hero.titleHighlight": "tus emociones",
    "hero.description":
      "Describe cómo te sientes y nuestra IA creará la playlist perfecta de Spotify para tu estado de ánimo. Música personalizada en segundos.",
    "hero.cta": "Crear Mi Primera Playlist",
    "hero.demo": "Ver Demo",

    // Features
    "features.title": "Música perfecta para cada emoción",
    "features.subtitle": "Tecnología de vanguardia que transforma tus sentimientos en experiencias musicales únicas",
    "features.ai.title": "IA Emocional",
    "features.ai.description":
      "Nuestra IA analiza tu estado de ánimo y encuentra la música perfecta para cada momento.",
    "features.spotify.title": "Integración con Spotify",
    "features.spotify.description": "Crea playlists directamente en tu cuenta de Spotify con un solo clic.",
    "features.instant.title": "Resultados Instantáneos",
    "features.instant.description": "Obtén tu playlist personalizada en segundos, no en horas de búsqueda.",
    "features.personalization.title": "Personalización Total",
    "features.personalization.description":
      "Cada playlist es única y adaptada a tu gusto musical y emociones específicas.",
    "features.discover.title": "Descubre Nueva Música",
    "features.discover.description": "Encuentra artistas y canciones que nunca hubieras descubierto por tu cuenta.",
    "features.history.title": "Historial de Playlists",
    "features.history.description": "Guarda y accede a todas tus playlists emocionales cuando quieras.",

    // How It Works
    "howItWorks.title": "Tan simple como contar cómo te sientes",
    "howItWorks.subtitle": "Cuatro pasos para tu playlist perfecta",
    "howItWorks.step1.title": "Describe tu emoción",
    "howItWorks.step1.description": "Cuéntanos cómo te sientes: feliz, nostálgico, motivado, relajado... lo que sea.",
    "howItWorks.step2.title": "La IA analiza",
    "howItWorks.step2.description": "Nuestro modelo de IA interpreta tu estado emocional y preferencias musicales.",
    "howItWorks.step3.title": "Playlist generada",
    "howItWorks.step3.description": "Recibe una selección curada de canciones perfectas para tu momento.",
    "howItWorks.step4.title": "Guarda en Spotify",
    "howItWorks.step4.description": "Con un clic, la playlist se crea automáticamente en tu cuenta de Spotify.",

    // CTA
    "cta.title": "¿Listo para descubrir tu banda sonora emocional?",
    "cta.description": "Únete a miles de usuarios que ya están creando playlists perfectas con IA",
    "cta.button": "Comenzar Gratis",

    // Footer
    "footer.tagline": "Música que entiende tus emociones",
    "footer.product": "Producto",
    "footer.features": "Características",
    "footer.howItWorks": "Cómo Funciona",
    "footer.pricing": "Precios",
    "footer.company": "Compañía",
    "footer.about": "Acerca de",
    "footer.blog": "Blog",
    "footer.careers": "Carreras",
    "footer.legal": "Legal",
    "footer.privacy": "Privacidad",
    "footer.terms": "Términos",
    "footer.rights": "Todos los derechos reservados.",

    // Dashboard
    "dashboard.title": "Crea tu Playlist",
    "dashboard.subtitle": "Describe cómo te sientes y nuestra IA creará la playlist perfecta para ti",

    // Playlist Generator
    "generator.title": "Generador de Playlist",
    "generator.description": "Cuéntanos cómo te sientes y crearemos la música perfecta para ti",
    "generator.emotionLabel": "¿Cómo te sientes?",
    "generator.emotionPlaceholder":
      "Ej: Me siento nostálgico y quiero recordar los buenos tiempos... o estoy motivado y listo para conquistar el mundo... o necesito relajarme después de un día estresante...",
    "generator.nameLabel": "Nombre de la Playlist (opcional)",
    "generator.namePlaceholder": "Ej: Vibes Nostálgicos, Energía Matutina, Relax Nocturno...",
    "generator.generating": "Generando tu playlist...",
    "generator.generate": "Generar Playlist",
    "generator.error": "Hubo un error al generar la playlist. Por favor intenta de nuevo.",

    // Playlist Result
    "result.emotionAnalysis": "Análisis Emocional",
    "result.tracks": "canciones",
    "result.saving": "Guardando en Spotify...",
    "result.save": "Guardar en Spotify",
    "result.success": "¡Playlist guardada exitosamente en Spotify!",
    "result.error": "Error al guardar la playlist. Por favor intenta de nuevo.",

    // User Nav
    "userNav.dashboard": "Dashboard",
    "userNav.settings": "Configuración",
    "userNav.logout": "Cerrar Sesión",

    // Sign In
    "signin.title": "Bienvenido a MooD DJ",
    "signin.subtitle": "Inicia sesión con Spotify para comenzar a crear playlists emocionales",
    "signin.button": "Continuar con Spotify",
    "signin.terms": "Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad.",

    // Authentication
    "auth.login": "Iniciar Sesión",
    "auth.signUp": "Registrarse",
    "auth.email": "Correo Electrónico",
    "auth.password": "Contraseña",
    "auth.fullName": "Nombre Completo",
    "auth.loginDescription": "Ingresa tu correo para iniciar sesión",
    "auth.signUpDescription": "Crea una nueva cuenta",
    "auth.continueWithGoogle": "Continuar con Google",
    "auth.orContinueWith": "O continuar con",
    "auth.loggingIn": "Iniciando sesión...",
    "auth.creatingAccount": "Creando cuenta...",
    "auth.noAccount": "¿No tienes cuenta?",
    "auth.haveAccount": "¿Ya tienes cuenta?",
    "auth.error": "Ocurrió un error",
    "auth.checkEmail": "Revisa tu correo",
    "auth.verifyEmailDescription": "Te hemos enviado un enlace de verificación a tu correo electrónico.",
    "auth.verifyEmailNote": "Por favor revisa tu bandeja de entrada y haz clic en el enlace para activar tu cuenta.",

    // Subscription and Credits
    "subscription.free": "Gratis",
    "subscription.premium": "Premium",
    "subscription.trial": "Prueba",
    "subscription.credits": "créditos",
    "subscription.creditsRemaining": "créditos restantes",
    "subscription.noCredits": "Sin créditos",
    "subscription.noCreditsDescription":
      "Has usado todos tus créditos gratuitos. Actualiza a Premium para acceso ilimitado.",
    "subscription.upgrade": "Actualizar a Premium",
    "subscription.unlimited": "Ilimitado",
    "subscription.perMonth": "/mes",
    "subscription.subscribe": "Suscribirse",
    "subscription.manageSubscription": "Gestionar Suscripción",
  },
  en: {
    // Header
    "header.features": "Features",
    "header.howItWorks": "How It Works",
    "header.start": "Get Started",

    // Hero
    "hero.badge": "Powered by Artificial Intelligence",
    "hero.title": "Playlists that understand",
    "hero.titleHighlight": "your emotions",
    "hero.description":
      "Describe how you feel and our AI will create the perfect Spotify playlist for your mood. Personalized music in seconds.",
    "hero.cta": "Create My First Playlist",
    "hero.demo": "Watch Demo",

    // Features
    "features.title": "Perfect music for every emotion",
    "features.subtitle": "Cutting-edge technology that transforms your feelings into unique musical experiences",
    "features.ai.title": "Emotional AI",
    "features.ai.description": "Our AI analyzes your mood and finds the perfect music for every moment.",
    "features.spotify.title": "Spotify Integration",
    "features.spotify.description": "Create playlists directly in your Spotify account with one click.",
    "features.instant.title": "Instant Results",
    "features.instant.description": "Get your personalized playlist in seconds, not hours of searching.",
    "features.personalization.title": "Total Personalization",
    "features.personalization.description":
      "Each playlist is unique and tailored to your musical taste and specific emotions.",
    "features.discover.title": "Discover New Music",
    "features.discover.description": "Find artists and songs you would never have discovered on your own.",
    "features.history.title": "Playlist History",
    "features.history.description": "Save and access all your emotional playlists whenever you want.",

    // How It Works
    "howItWorks.title": "As simple as telling us how you feel",
    "howItWorks.subtitle": "Four steps to your perfect playlist",
    "howItWorks.step1.title": "Describe your emotion",
    "howItWorks.step1.description": "Tell us how you feel: happy, nostalgic, motivated, relaxed... whatever it is.",
    "howItWorks.step2.title": "AI analyzes",
    "howItWorks.step2.description": "Our AI model interprets your emotional state and musical preferences.",
    "howItWorks.step3.title": "Playlist generated",
    "howItWorks.step3.description": "Receive a curated selection of songs perfect for your moment.",
    "howItWorks.step4.title": "Save to Spotify",
    "howItWorks.step4.description": "With one click, the playlist is automatically created in your Spotify account.",

    // CTA
    "cta.title": "Ready to discover your emotional soundtrack?",
    "cta.description": "Join thousands of users already creating perfect playlists with AI",
    "cta.button": "Start Free",

    // Footer
    "footer.tagline": "Music that understands your emotions",
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.howItWorks": "How It Works",
    "footer.pricing": "Pricing",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy",
    "footer.terms": "Terms",
    "footer.rights": "All rights reserved.",

    // Dashboard
    "dashboard.title": "Create Your Playlist",
    "dashboard.subtitle": "Describe how you feel and our AI will create the perfect playlist for you",

    // Playlist Generator
    "generator.title": "Playlist Generator",
    "generator.description": "Tell us how you feel and we'll create the perfect music for you",
    "generator.emotionLabel": "How do you feel?",
    "generator.emotionPlaceholder":
      "E.g: I feel nostalgic and want to remember the good times... or I'm motivated and ready to conquer the world... or I need to relax after a stressful day...",
    "generator.nameLabel": "Playlist Name (optional)",
    "generator.namePlaceholder": "E.g: Nostalgic Vibes, Morning Energy, Night Relaxation...",
    "generator.generating": "Generating your playlist...",
    "generator.generate": "Generate Playlist",
    "generator.error": "There was an error generating the playlist. Please try again.",

    // Playlist Result
    "result.emotionAnalysis": "Emotion Analysis",
    "result.tracks": "tracks",
    "result.saving": "Saving to Spotify...",
    "result.save": "Save to Spotify",
    "result.success": "Playlist successfully saved to Spotify!",
    "result.error": "Error saving playlist. Please try again.",

    // User Nav
    "userNav.dashboard": "Dashboard",
    "userNav.settings": "Settings",
    "userNav.logout": "Log Out",

    // Sign In
    "signin.title": "Welcome to MooD DJ",
    "signin.subtitle": "Sign in with Spotify to start creating emotional playlists",
    "signin.button": "Continue with Spotify",
    "signin.terms": "By continuing, you agree to our Terms of Service and Privacy Policy.",

    // Authentication
    "auth.login": "Log In",
    "auth.signUp": "Sign Up",
    "auth.email": "Email",
    "auth.password": "Password",
    "auth.fullName": "Full Name",
    "auth.loginDescription": "Enter your email to log in",
    "auth.signUpDescription": "Create a new account",
    "auth.continueWithGoogle": "Continue with Google",
    "auth.orContinueWith": "Or continue with",
    "auth.loggingIn": "Logging in...",
    "auth.creatingAccount": "Creating account...",
    "auth.noAccount": "Don't have an account?",
    "auth.haveAccount": "Already have an account?",
    "auth.error": "An error occurred",
    "auth.checkEmail": "Check your email",
    "auth.verifyEmailDescription": "We've sent a verification link to your email address.",
    "auth.verifyEmailNote": "Please check your inbox and click the link to activate your account.",

    // Subscription and Credits
    "subscription.free": "Free",
    "subscription.premium": "Premium",
    "subscription.trial": "Trial",
    "subscription.credits": "credits",
    "subscription.creditsRemaining": "credits remaining",
    "subscription.noCredits": "No credits",
    "subscription.noCreditsDescription": "You've used all your free credits. Upgrade to Premium for unlimited access.",
    "subscription.upgrade": "Upgrade to Premium",
    "subscription.unlimited": "Unlimited",
    "subscription.perMonth": "/month",
    "subscription.subscribe": "Subscribe",
    "subscription.manageSubscription": "Manage Subscription",
  },
  zh: {
    // Header
    "header.features": "功能特点",
    "header.howItWorks": "工作原理",
    "header.start": "开始使用",

    // Hero
    "hero.badge": "人工智能驱动",
    "hero.title": "理解",
    "hero.titleHighlight": "你情绪的播放列表",
    "hero.description": "描述你的感受，我们的AI将为你的心情创建完美的Spotify播放列表。几秒钟内获得个性化音乐。",
    "hero.cta": "创建我的第一个播放列表",
    "hero.demo": "观看演示",

    // Features
    "features.title": "为每种情绪提供完美音乐",
    "features.subtitle": "将你的感受转化为独特音乐体验的尖端技术",
    "features.ai.title": "情感AI",
    "features.ai.description": "我们的AI分析你的心情，为每个时刻找到完美的音乐。",
    "features.spotify.title": "Spotify集成",
    "features.spotify.description": "一键直接在你的Spotify账户中创建播放列表。",
    "features.instant.title": "即时结果",
    "features.instant.description": "几秒钟内获得个性化播放列表，无需数小时搜索。",
    "features.personalization.title": "完全个性化",
    "features.personalization.description": "每个播放列表都是独特的，根据你的音乐品味和特定情绪量身定制。",
    "features.discover.title": "发现新音乐",
    "features.discover.description": "找到你自己永远不会发现的艺术家和歌曲。",
    "features.history.title": "播放列表历史",
    "features.history.description": "随时保存和访问所有情感播放列表。",

    // How It Works
    "howItWorks.title": "就像告诉我们你的感受一样简单",
    "howItWorks.subtitle": "四步获得完美播放列表",
    "howItWorks.step1.title": "描述你的情绪",
    "howItWorks.step1.description": "告诉我们你的感受：快乐、怀旧、有动力、放松...无论什么。",
    "howItWorks.step2.title": "AI分析",
    "howItWorks.step2.description": "我们的AI模型解释你的情绪状态和音乐偏好。",
    "howItWorks.step3.title": "生成播放列表",
    "howItWorks.step3.description": "收到为你的时刻精心挑选的歌曲。",
    "howItWorks.step4.title": "保存到Spotify",
    "howItWorks.step4.description": "一键点击，播放列表自动在你的Spotify账户中创建。",

    // CTA
    "cta.title": "准备好发现你的情感配乐了吗？",
    "cta.description": "加入数千名已经使用AI创建完美播放列表的用户",
    "cta.button": "免费开始",

    // Footer
    "footer.tagline": "理解你情绪的音乐",
    "footer.product": "产品",
    "footer.features": "功能特点",
    "footer.howItWorks": "工作原理",
    "footer.pricing": "价格",
    "footer.company": "公司",
    "footer.about": "关于",
    "footer.blog": "博客",
    "footer.careers": "职业",
    "footer.legal": "法律",
    "footer.privacy": "隐私",
    "footer.terms": "条款",
    "footer.rights": "版权所有。",

    // Dashboard
    "dashboard.title": "创建你的播放列表",
    "dashboard.subtitle": "描述你的感受，我们的AI将为你创建完美的播放列表",

    // Playlist Generator
    "generator.title": "播放列表生成器",
    "generator.description": "告诉我们你的感受，我们将为你创建完美的音乐",
    "generator.emotionLabel": "你感觉如何？",
    "generator.emotionPlaceholder":
      "例如：我感到怀旧，想回忆美好时光...或者我充满动力，准备征服世界...或者我需要在压力大的一天后放松...",
    "generator.nameLabel": "播放列表名称（可选）",
    "generator.namePlaceholder": "例如：怀旧氛围、早晨能量、夜晚放松...",
    "generator.generating": "正在生成你的播放列表...",
    "generator.generate": "生成播放列表",
    "generator.error": "生成播放列表时出错。请重试。",

    // Playlist Result
    "result.emotionAnalysis": "情绪分析",
    "result.tracks": "首歌曲",
    "result.saving": "正在保存到Spotify...",
    "result.save": "保存到Spotify",
    "result.success": "播放列表已成功保存到Spotify！",
    "result.error": "保存播放列表时出错。请重试。",

    // User Nav
    "userNav.dashboard": "仪表板",
    "userNav.settings": "设置",
    "userNav.logout": "退出登录",

    // Sign In
    "signin.title": "欢迎来到MooD DJ",
    "signin.subtitle": "使用Spotify登录以开始创建情感播放列表",
    "signin.button": "使用Spotify继续",
    "signin.terms": "继续即表示你同意我们的服务条款和隐私政策。",

    // Authentication
    "auth.login": "登录",
    "auth.signUp": "注册",
    "auth.email": "电子邮件",
    "auth.password": "密码",
    "auth.fullName": "全名",
    "auth.loginDescription": "输入你的电子邮件登录",
    "auth.signUpDescription": "创建新账户",
    "auth.continueWithGoogle": "使用Google继续",
    "auth.orContinueWith": "或继续使用",
    "auth.loggingIn": "正在登录...",
    "auth.creatingAccount": "正在创建账户...",
    "auth.noAccount": "没有账户？",
    "auth.haveAccount": "已有账户？",
    "auth.error": "发生错误",
    "auth.checkEmail": "检查你的电子邮件",
    "auth.verifyEmailDescription": "我们已向你的电子邮件地址发送了验证链接。",
    "auth.verifyEmailNote": "请检查你的收件箱并点击链接激活你的账户。",

    // Subscription and Credits
    "subscription.free": "免费",
    "subscription.premium": "高级",
    "subscription.trial": "试用",
    "subscription.credits": "积分",
    "subscription.creditsRemaining": "剩余积分",
    "subscription.noCredits": "无积分",
    "subscription.noCreditsDescription": "你已用完所有免费积分。升级到高级版以获得无限访问。",
    "subscription.upgrade": "升级到高级版",
    "subscription.unlimited": "无限",
    "subscription.perMonth": "/月",
    "subscription.subscribe": "订阅",
    "subscription.manageSubscription": "管理订阅",
  },
}

export function detectLanguage(text: string): Locale {
  // Simple language detection based on character patterns
  // Chinese characters
  if (/[\u4e00-\u9fa5]/.test(text)) {
    return "zh"
  }

  // Common Spanish words and patterns
  const spanishPatterns = [
    /\b(estoy|siento|me|mi|tu|que|como|muy|pero|para|con|por|una|uno)\b/i,
    /ción\b/i,
    /\bñ/i,
    /[áéíóúü]/i,
  ]

  const hasSpanishPattern = spanishPatterns.some((pattern) => pattern.test(text))

  if (hasSpanishPattern) {
    return "es"
  }

  // Default to English
  return "en"
}

export function getTranslation(locale: Locale, key: string): string {
  return translations[locale][key as keyof (typeof translations)[typeof locale]] || key
}
