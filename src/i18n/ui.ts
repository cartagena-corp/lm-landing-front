export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

/* ═══════════════════════════════════════════════
   Numeric / Statistical Data
   Shared across all languages (no translation needed)
   ═══════════════════════════════════════════════ */
export const data = {
    stats: {
        teams: '+50',
        tasks: '+10,000',
        uptime: '99.9%',
        satisfaction: '24/7',
    },
    testimonials: {
        rating: 5,
    },
    form: {
        commentMaxLength: 500,
    },
} as const;

/* ═══════════════════════════════════════════════
   UI Text Translations
   ═══════════════════════════════════════════════ */
export const ui = {
    es: {
        /* ── SEO ── */
        'seo.title': 'Gestor de Tareas y Alternativa a Jira | LA MURALLA',
        'seo.description':
            'Descubre LA MURALLA, el gestor de tareas y alternativa a Jira. Software kanban ágil para equipos productivos. ¡Empieza tu project management gratis!',
        'seo.keywords':
            'gestor de tareas, alternativa a Jira, task manager, software kanban, project management tool, todo app',

        /* ── Navbar ── */
        'nav.features': 'Características',
        'nav.workflow': 'Cómo Funciona',
        'nav.testimonials': 'Testimonios',
        'nav.demo': 'Agenda una Demo',
        'nav.startFree': 'Comenzar Gratis',
        'nav.signIn': 'Iniciar Sesión',

        /* ── Hero ── */
        'hero.headline': 'Domina tus proyectos y derriba los obstáculos con',
        'hero.headlineAccent': 'La Muralla.',
        'hero.sub':
            'El sistema de gestión de tableros ágiles diseñado para que tu equipo planifique, rastree y entregue software de primer nivel sin fricciones. Todo sincronizado en tiempo real.',
        'hero.cta': 'Empieza tu prueba gratuita',
        'hero.secondary': 'Agendar una Demo',

        /* ── Stats (labels only — values are in `data`) ── */
        'stats.teams': 'Organizaciones activas',
        'stats.tasks': 'Issues resueltos este mes',
        'stats.uptime': 'Uptime y fiabilidad',
        'stats.satisfaction': 'Soporte técnico y acompañamiento ágil',

        /* ── Features ── */
        'features.title': 'Todo lo que tu equipo necesita para ser invencible',
        'features.sub': '',
        'features.1.title': 'Gestión Avanzada de Tableros',
        'features.1.desc':
            'Crea múltiples Boards con vistas personalizables, etiquetas y campos enfocados a tu metodología.',
        'features.2.title': 'Control de Sprints Impecable',
        'features.2.desc':
            'Define fechas de inicio y fin, haz seguimiento de historias de usuario y evalúa la productividad.',
        'features.3.title': 'Filtros y Búsqueda Milimétrica',
        'features.3.desc':
            'Filtra tus issues por estado, creador, o dirección (asc/desc) para encontrar exactamente lo que necesitas.',
        'features.4.title': 'Multiorganización',
        'features.4.desc':
            'Administra distintos espacios de trabajo o empresas (Data compartimentada de forma segura).',
        'features.5.title': 'Fechas y Trazabilidad',
        'features.5.desc':
            'Monitorea la creación (createdAt) y actualización (updatedAt) de cada tarjeta a través de nuestros DateBadges.',
        'features.6.title': 'Seguridad Empresarial',
        'features.6.desc':
            'Cifrado de extremo a extremo, SSO y cumplimiento SOC 2.',

        /* ── Workflow ── */
        'workflow.title': 'Da vida a tus ideas en 3 simples pasos',
        'workflow.sub': '',
        'workflow.1.title': 'Configura tu Organización',
        'workflow.1.desc':
            'Define el espacio de tu empresa e invita a los miembros de tu equipo con roles y accesos a la medida.',
        'workflow.2.title': 'Crea Tableros y Sprints',
        'workflow.2.desc':
            'Estructura visualmente tu flujo de trabajo. Organiza etapas y define en qué iteración (Sprint) se trabajará.',
        'workflow.3.title': 'Asigna Issues y Conquista Metas',
        'workflow.3.desc':
            'Identifica problemas, asígnalos a los desarrolladores y sigue el progreso en cada filtro visual hasta el cierre.',

        /* ── Testimonials ── */
        'testimonials.title': 'Lo que dicen las organizaciones que confían en nosotros',
        'testimonials.sub': '',
        'testimonials.1.text':
            'Estábamos perdiendo el rastro de nuestros bugs. Con La Muralla, nuestros Sprints por fin tienen sentido y todo el equipo de QA respira aliviado.',
        'testimonials.1.name': 'Kenn Marcucci',
        'testimonials.1.role': 'Frontend Developer',
        'testimonials.2.text':
            'La función de manejar múltiples organizaciones nos permite llevar los proyectos de varios clientes sin mezclar repositorios. Es excelente.',
        'testimonials.2.name': 'Diego Pedrozo',
        'testimonials.2.role': 'Backend Developer',
        'testimonials.3.text': 'Excelente herramienta para gestionar proyectos, la IA me ha facilitado mucho el trabajo.',
        'testimonials.3.name': 'Andrés Camperos',
        'testimonials.3.role': 'FullStack Developer',

        /* ── CTA ── */
        'cta.title': 'La agilidad de tu equipo no debe esperar más.',
        'cta.sub':
            'Únete a las empresas que ya superan sus cuellos de botella con nuestro sistema de gestión.',
        'cta.primary': 'Agenda Demo',
        'cta.secondary': 'Inicia Sesión',

        /* ── Calendar / Demo ── */
        'demo.title': '¿Quieres ver La Muralla en acción?',
        'demo.sub':
            'Selecciona un horario y uno de nuestros expertos te guiará por todas las funcionalidades de la plataforma.',
        'demo.platform': 'Selecciona la plataforma',
        'demo.googleMeet': 'Google Meet (vía Calendar)',
        'demo.teams': 'Microsoft Teams',
        'demo.selectDate': 'Selecciona una fecha',
        'demo.selectTime': 'Selecciona un horario',
        'demo.formTitle': 'Tus datos',
        'demo.name': 'Nombre completo',
        'demo.business': 'Empresa',
        'demo.email': 'Correo electrónico',
        'demo.phone': 'Teléfono',
        'demo.comment': 'Comentario (opcional)',
        'demo.charCount': 'caracteres',
        'demo.submit': 'Confirmar Fecha y Hora',
        'demo.consent': 'Al oprimir este botón estás dando consentimiento del tratamiento de tus datos personales y se agendará una sesión al correo que se escribió en el formulario.',
        'demo.success': 'Tu demo ha sido agendada exitosamente',
        'demo.error': 'Hubo un problema al agendar tu demo. Por favor, intenta de nuevo.',
        'demo.emptyDate': 'Selecciona una fecha',
        'demo.buttonCalendar': 'Ver en Google Calendar',
        'demo.buttonMeet': 'Unirse a la reunión',
        'demo.bookingAlert': 'Por favor selecciona una fecha y hora',
        'demo.bookingText': 'Agendando...',
        'demo.bookingTitle': 'Demo - ',
        'demo.bookingDetails': 'Datos del formulario:',
        'demo.bookingName': 'Nombre:',
        'demo.bookingEmpresa': 'Empresa:',
        'demo.bookingEmail': 'Email:',
        'demo.bookingPhone': 'Teléfono:',
        'demo.noSlots': 'No hay horarios disponibles',

        /* ── Footer ── */
        'footer.rights': '© 2026 Cartagena Corp. Todos los derechos reservados.',
        'footer.tagline': 'Construyendo equipos sólidos, proyecto a proyecto.',
        'footer.newsletter.title': 'Mantente al día',
        'footer.newsletter.desc': 'Suscríbete para recibir tips de metodologías ágiles',
        'footer.newsletter.placeholder': 'Tu email',
        'footer.newsletter.button': 'Enviar',
        'footer.product': 'Producto',
        'footer.product.features': 'Features',
        'footer.product.pricing': 'Precios',
        'footer.product.integrations': 'Workflow',
        'footer.product.changelog': 'Cambios',
        'footer.company': 'Compañía',
        'footer.company.about': 'Acerca de nosotros',
        'footer.company.blog': 'Blog',
        'footer.company.careers': 'Empleo',
        'footer.company.contact': 'Contacto',
        'footer.legal': 'Legal',
        'footer.legal.privacy': 'Política de privacidad',
        'footer.legal.terms': 'Términos de servicio',
        'footer.legal.cookies': 'Cookies',
    },

    en: {
        /* ── SEO ── */
        'seo.title': 'Task Manager & Jira Alternative | LA MURALLA',
        'seo.description':
            'Discover LA MURALLA, the ultimate task manager and Jira alternative. Efficient kanban software for agile teams. Start your project management free today!',
        'seo.keywords':
            'task manager, Jira alternative, project management tool, kanban software, todo app, task management',

        /* ── Navbar ── */
        'nav.features': 'Features',
        'nav.workflow': 'Workflow',
        'nav.testimonials': 'Testimonials',
        'nav.demo': 'Demo',
        'nav.startFree': 'Book Demo',
        'nav.signIn': 'Sign In',

        /* ── Hero ── */
        'hero.headline': 'Your task manager with the strength of',
        'hero.headlineAccent': 'La Muralla',
        'hero.sub':
            'The all-in-one platform for your team to define, build, and scale projects effortlessly.',
        'hero.cta': 'Start Free',
        'hero.secondary': 'Request Demo',

        /* ── Stats (labels only — values are in `data`) ── */
        'stats.teams': 'Active Teams',
        'stats.tasks': 'Tasks Completed',
        'stats.uptime': 'Uptime',
        'stats.satisfaction': 'Satisfaction',

        /* ── Features ── */
        'features.title': 'Everything you need to be productive',
        'features.sub':
            'Powerful tools designed for modern teams that demand results.',
        'features.1.title': 'Kanban Software Boards',
        'features.1.desc':
            'Visualize your workflow and move tasks with drag and drop.',
        'features.2.title': 'Automations',
        'features.2.desc':
            'Create custom rules to automate repetitive actions.',
        'features.3.title': 'Real-Time Reports',
        'features.3.desc':
            'Dynamic dashboards with team performance metrics.',
        'features.4.title': 'Integrations',
        'features.4.desc':
            'Connect with Slack, GitHub, Google Drive, and 50+ tools.',
        'features.5.title': 'Gantt Timelines',
        'features.5.desc':
            'Plan sprints and dependencies with timeline views.',
        'features.6.title': 'Enterprise Security',
        'features.6.desc':
            'End-to-end encryption, SSO, and SOC 2 compliance.',

        /* ── Workflow ── */
        'workflow.title': 'How It Works',
        'workflow.sub': 'Three steps to transform your team\'s productivity.',
        'workflow.1.title': 'Define',
        'workflow.1.desc':
            'Set clear goals, assign owners, and prioritize what matters.',
        'workflow.2.title': 'Build',
        'workflow.2.desc':
            'Collaborate in real time with your team using boards, docs, and chat.',
        'workflow.3.title': 'Scale',
        'workflow.3.desc':
            'Automate processes, analyze metrics, and multiply results.',

        /* ── Testimonials ── */
        'testimonials.title': 'What Our Users Say',
        'testimonials.sub':
            'Thousands of teams trust LA MURALLA for their daily management.',
        'testimonials.1.text':
            'LA MURALLA transformed how we manage projects. The UI is intuitive, and the team adopted it in a day.',
        'testimonials.1.name': 'María López',
        'testimonials.1.role': 'CTO, TechLatam',
        'testimonials.2.text':
            'We left Jira for LA MURALLA and never looked back. The speed and simplicity are unmatched.',
        'testimonials.2.name': 'Carlos Mendoza',
        'testimonials.2.role': 'Product Manager, Finzero',
        'testimonials.3.text':
            'Customer support is outstanding, and the automations saved us hours every week.',
        'testimonials.3.name': 'Ana Restrepo',
        'testimonials.3.role': 'Operations Lead, CloudBase',

        /* ── CTA ── */
        'cta.title': 'Take your team to the next level',
        'cta.sub':
            'Join thousands of teams already trusting LA MURALLA to reach their goals.',
        'cta.primary': 'Start Free',
        'cta.secondary': 'Sign In',

        /* ── Calendar / Demo ── */
        'demo.title': 'Book a Demo',
        'demo.sub':
            'Schedule a call with our team and discover how LA MURALLA can boost your productivity.',
        'demo.platform': 'Select Platform',
        'demo.googleMeet': 'Google Meet (via Calendar)',
        'demo.teams': 'Microsoft Teams',
        'demo.selectDate': 'Select a Date',
        'demo.selectTime': 'Select a Time',
        'demo.formTitle': 'Your Details',
        'demo.name': 'Full Name',
        'demo.business': 'Business',
        'demo.email': 'Email',
        'demo.phone': 'Phone',
        'demo.comment': 'Comment (optional)',
        'demo.charCount': 'characters',
        'demo.submit': 'Confirm Booking',
        'demo.consent': 'By pressing this button you are giving explicit consent for the processing of your personal data, and a session will be scheduled to the email entered in the form.',
        'demo.success': 'Your demo has been successfully scheduled',
        'demo.error': 'There was a problem scheduling your demo. Please try again.',
        'demo.emptyDate': 'Select a date',
        'demo.buttonCalendar': 'View in Google Calendar',
        'demo.buttonMeet': 'Join the meeting',
        'demo.bookingAlert': 'Please select a date and time',
        'demo.bookingText': 'Booking...',
        'demo.bookingTitle': 'Demo - ',
        'demo.bookingDetails': 'Form details:',
        'demo.bookingName': 'Name:',
        'demo.bookingEmpresa': 'Business:',
        'demo.bookingEmail': 'Email:',
        'demo.bookingPhone': 'Phone:',
        'demo.noSlots': 'No slots available',

        /* ── Footer ── */
        'footer.rights': '© 2026 LA MURALLA. All rights reserved.',
        'footer.tagline': 'Intelligent task management for ambitious teams.',
        'footer.newsletter.title': 'Stay updated',
        'footer.newsletter.desc': 'Get the latest news and productivity tips once a month.',
        'footer.newsletter.placeholder': 'Your email',
        'footer.newsletter.button': 'Go',
        'footer.product': 'Product',
        'footer.product.features': 'Features',
        'footer.product.pricing': 'Pricing',
        'footer.product.integrations': 'Integrations',
        'footer.product.changelog': 'Changelog',
        'footer.company': 'Company',
        'footer.company.about': 'About',
        'footer.company.blog': 'Blog',
        'footer.company.careers': 'Careers',
        'footer.company.contact': 'Contact',
        'footer.legal': 'Legal',
        'footer.legal.privacy': 'Privacy',
        'footer.legal.terms': 'Terms',
        'footer.legal.cookies': 'Cookies',
    },
} as const;

export type LangKey = keyof typeof ui;
export type UIKey = keyof (typeof ui)['es'];
