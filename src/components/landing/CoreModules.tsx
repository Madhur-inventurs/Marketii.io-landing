import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const CoreModules = () => {
    const modules = [
        "Sales & CRM (Deals, Pipelines, Reports)",
        "Projects & HR (Tasks, Attendance, Timesheets)",
        "Finance (Invoices, Payments, Bank Sync)",
        "Marketing (Email, WhatsApp, Ad Integrations)",
    ];
    return (
        <section id="modules" className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Our Core Modules</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Everything you need to run your business, integrated seamlessly.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        {modules.map((module, index) => (
                            <Card key={index} className="bg-secondary/50 border-none shadow-sm hover:shadow-lg transition-all duration-300 hover:bg-secondary hover:-translate-y-1">
                                <CardContent className="p-6 flex items-center">
                                    <CheckCircle2 className="h-6 w-6 text-primary mr-4 flex-shrink-0" />
                                    <p className="font-semibold">{module}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div>
                        <Image 
                            src="https://placehold.co/600x400.png"
                            alt="Dashboard screenshot showing core modules"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-500"
                            data-ai-hint="dashboard screen"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoreModules;
