# Velora - B2B Transport Models

## About Velora

Velora is an innovative e-mobility startup that revolutionizes workplace transportation by providing structured, scalable transport models specifically designed for corporate needs and sustainable mobility solutions.

## Our Transport Models

### 🚗 **B2B Transport Models**

- **Exclusive Company Travel Model**: Dedicated transportation for single companies with custom scheduling
- **Pooled Inter-Company Travel Model**: Shared rides across organizations for higher efficiency
- **Smart Transport Matching Algorithm**: Intelligent vehicle type and routing optimization
- **Employee Dashboard & Analytics**: Personalized travel management and cost tracking

### 🏢 **For Companies**

- Complete transport management with company-level control and transparency
- Custom scheduling based on travel allowances and employee details
- Route monitoring to ensure official use and reduce fraudulent claims
- Flexible grouping options (1-3 employees per cab from same company)
- Real-time analytics on costs, utilization, and environmental impact
- BRSR/CSRD compliance with Scope-3 CO₂ tracking

### 👥 **For Employees**

- Personalized dashboards eliminating repeated booking and reimbursement
- Travel history, costs, and analytics at their fingertips
- Automated travel record maintenance
- Seamless ride experience with intelligent matching
- Contribution to environmental sustainability through shared transport

## 🛠 **Transport Models**

### 1. **Exclusive Company Travel Model**

- Dedicated services for single company employees only
- Custom scheduling based on travel allowances and pickup/drop locations
- Flexible grouping (1-3 employees per cab from same company)
- Complete company control with dedicated employee dashboards
- Full transport management by Velora

### 2. **Pooled Inter-Company Travel Model**

- Shared rides across multiple companies for route overlap
- Higher efficiency through increased pooling probability
- Primary focus on reducing CO₂ emissions and urban traffic
- Optimized for dense corporate zones like Bengaluru
- Environmental impact reduction while maintaining cost benefits

### 3. **Smart Transport Matching**

- Intelligent algorithm for optimal vehicle type selection
- Real-time scheduling based on bookings and traffic
- Cost-effectiveness and minimal environmental impact
- Dynamic routing for efficiency optimization

## 🌟 **Key Features**

- **Smart Transport Matching**: AI-powered vehicle type and routing optimization
- **Company-Level Control**: Route monitoring and expense fraud prevention
- **Employee Analytics**: Personal dashboards with travel history and costs
- **Sustainability Focus**: CO₂ reduction and traffic congestion mitigation
- **Flexible Models**: Exclusive or pooled transport based on company needs
- **Full Management**: Complete transport logistics handled by Velora

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
