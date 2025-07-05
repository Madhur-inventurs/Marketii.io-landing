import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2 } from "lucide-react";

const FeatureList = ({ features }: { features: string[] }) => (
    <ul className="space-y-4 mt-6 text-lg">
        {features.map((feature, index) => (
            <li key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>{feature}</span>
            </li>
        ))}
    </ul>
)

export default function FeaturesPage() {
    const features = {
        sales: [
            "Pipeline, Lead & Deal Tracking",
            "Customizable Reports & Dashboards",
            "VOIP Calling (Coming Soon)",
            "AI Smart Suggestions & Follow-ups",
        ],
        crm: [
            "Smart Contact Profiles with 360° View",
            "Automatic Email & WhatsApp Log Sync",
            "AI Engagement Triggers & Auto Sequences",
        ],
        marketing: [
            "WhatsApp Campaigns (Add-on)",
            "AI-Powered Email Template Generator",
            "Ad Platform Integrations (Google, FB, Insta, LinkedIn, etc.)",
            "One-click Lead Capture into CRM",
        ],
        finance: [
            "Create and Send Recurring Invoices",
            "Automated Payment Reminders via Email & WhatsApp",
            "E-Invoice and Credit Note Management",
        ],
        hr: [
            "Leave, Attendance, and Holiday Management",
            "Employee Appreciation & Kudos System",
        ],
        work: [
            "Project Roadmaps and Gantt Charts",
            "Task Timelines and Dependencies",
            "AI Task Assignment & Deadline Prediction",
        ],
        automation: [
            "WhatsApp auto-followup for orders, tasks, and invoices",
            "Smart Campaign Builder with conditional logic",
            "Predictive Deal Closing analysis",
            "Repeated Payment Alerts & Reminders"
        ]
    };

    return (
        <div className="container mx-auto px-4 py-16 sm:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">One CRM. Endless Possibilities.</h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Explore the powerful features that make Marketti.io the last CRM you'll ever need.</p>
            </div>

            <Tabs defaultValue="sales" className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 h-auto">
                    <TabsTrigger value="sales">Sales Management</TabsTrigger>
                    <TabsTrigger value="crm">CRM & Client</TabsTrigger>
                    <TabsTrigger value="marketing">Marketing</TabsTrigger>
                    <TabsTrigger value="finance">Finance</TabsTrigger>
                    <TabsTrigger value="hr">HR & Ops</TabsTrigger>
                    <TabsTrigger value="work">Work Management</TabsTrigger>
                    <TabsTrigger value="automation">Automation + AI</TabsTrigger>
                </TabsList>
                
                <div className="mt-8 p-6 bg-secondary/30 rounded-lg border">
                    <TabsContent value="sales"><FeatureList features={features.sales} /></TabsContent>
                    <TabsContent value="crm"><FeatureList features={features.crm} /></TabsContent>
                    <TabsContent value="marketing"><FeatureList features={features.marketing} /></TabsContent>
                    <TabsContent value="finance"><FeatureList features={features.finance} /></TabsContent>
                    <TabsContent value="hr"><FeatureList features={features.hr} /></TabsContent>
                    <TabsContent value="work"><FeatureList features={features.work} /></TabsContent>
                    <TabsContent value="automation"><FeatureList features={features.automation} /></TabsContent>
                </div>
            </Tabs>
        </div>
    );
}
