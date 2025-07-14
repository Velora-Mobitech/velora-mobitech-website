# Velora - Smart E-Mobility Solutions

## About Velora

Velora is an innovative e-mobility startup that revolutionizes workplace transportation by providing intelligent, cost-effective, and sustainable mobility solutions for enterprises and their employees.

## What We Do

### 🚗 **Core Services**

- **Cab/Shuttle Sharing**: Smart ride-sharing platform for company employees
- **Company Portal**: Dedicated dashboard for transportation management
- **Employee Mobile App**: User-friendly booking and journey management
- **Smart Route Optimization**: AI-powered algorithms for efficient travel

### 🏢 **For Companies**

- Hassle-free employee transportation management
- Cost optimization through fleet sharing and smart routing
- Real-time analytics on utilization, costs, and carbon emissions
- Automated billing and expense management
- API integration with HRIS, ERP, and finance systems
- BRSR/CSRD compliance with Scope-3 CO₂ tracking

### 👥 **For Employees**

- Multiple transportation modes based on convenience
- Flexible app-based booking system
- Automated travel record maintenance
- Cost savings through shared rides
- Smart routing to avoid delays

## 🛠 **Working Models**

### 1. **Fully Managed Model**

- Complete company control over employee transportation
- Global access controls through management dashboard
- Monthly billing based on actual usage
- Comprehensive analytics and reporting

### 2. **Travel Allowance Model**

- Fixed monthly credits allocated per employee
- Route-based fare deduction system
- Company charged only for credits used
- Employee self-service management

### 3. **Enterprise Custom**

- Tailored solutions for large organizations
- Custom API integrations
- White-label mobile applications
- Dedicated account management

## 🌟 **Key Features**

- **Smart Route Optimization**: AI-powered routing algorithms
- **Real-time Analytics**: Cost, utilization, and sustainability metrics
- **Green Mobility Tracking**: Carbon footprint monitoring and rewards
- **Fleet Management**: Comprehensive vehicle and driver management
- **API Integrations**: Seamless connection with enterprise systems
- **Mobile App**: User-friendly employee application

## 🚀 **Technology Stack**

This website is built with modern web technologies:

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Framework**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React

## 🏗 **Project Structure**

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── features/       # Feature-specific components
│   ├── pricing/        # Pricing section components
│   ├── BenefitsSection.tsx
│   ├── StatsSection.tsx
│   ├── IntegrationSection.tsx
│   └── ...
├── config/             # Configuration files
│   └── features.tsx    # Feature definitions
├── pages/              # Page components
│   └── Index.tsx       # Main landing page
└── lib/                # Utility functions
```

## 🎨 **Customization Guide**

### **Content Updates**

1. **Hero Section**: Edit `src/pages/Index.tsx`
2. **Features**: Modify `src/config/features.tsx`
3. **Pricing Plans**: Update `src/components/pricing/PricingSection.tsx`
4. **Testimonials**: Edit `src/components/TestimonialsSection.tsx`
5. **Company Benefits**: Modify `src/components/BenefitsSection.tsx`

### **Branding Updates**

1. **Logo/Name**: Update `src/components/Navigation.tsx`
2. **Colors**: Modify `src/index.css` CSS variables
3. **Footer**: Edit `src/components/Footer.tsx`

### **Adding New Sections**

1. Create new component in `src/components/`
2. Import and add to `src/pages/Index.tsx`
3. Update navigation if needed

## 🚀 **Development**

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn

### **Installation**

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd velora-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### **Development Commands**

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## 📱 **Responsive Design**

The website is fully responsive and optimized for:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥 Large screens (1280px+)

## 🎯 **Performance Features**

- ⚡ Fast loading with Vite
- 🎨 Smooth animations with Framer Motion
- 📦 Optimized bundle size
- 🖼 Optimized images and assets
- 🚀 Progressive enhancement

## 🌱 **Sustainability Focus**

Velora's platform emphasizes:

- 🌍 Carbon footprint reduction
- 📊 Scope-3 CO₂ tracking
- 🏆 Green-Miles™ rewards system
- 📈 Sustainability reporting
- 🌱 BRSR/CSRD compliance

## 📞 **Contact**

For enterprise inquiries or demos:

- 🌐 Website: [Visit our platform]
- 📧 Email: contact@velora.com
- 📱 Mobile: Request a demo through the website

## Deployment

This project is optimized for deployment on Vercel.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Velora-Mobitech/velora-mobitech-website)

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy to Vercel: `vercel --prod`

### Environment Variables

If you need environment variables, create a `.env.local` file:

```
VITE_API_URL=your_api_url_here
```

---

**Built with ❤️ for the future of sustainable workplace mobility**
