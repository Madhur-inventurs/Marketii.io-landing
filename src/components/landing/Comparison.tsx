import { Check, X } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Comparison = () => {
  const comparisonData = [
    { feature: 'All-in-One Platform (Sales, HR, Finance, etc.)', marketti: true, kylas: false, zoho: 'partial', salesforce: 'partial' },
    { feature: 'Integrated AI + Automation', marketti: true, kylas: false, zoho: true, salesforce: true },
    { feature: 'Digital Marketing as a Product', marketti: true, kylas: false, zoho: false, salesforce: false },
    { feature: 'Transparent "Pay as you Grow" Pricing', marketti: true, kylas: true, zoho: false, salesforce: false },
    { feature: 'Built-in VOIP Calling (Soon)', marketti: true, kylas: false, zoho: true, salesforce: 'add-on' },
  ];

  const renderCheck = (value: boolean | string) => {
    if (value === true) return <Check className="h-6 w-6 text-green-500 mx-auto" />;
    if (value === false) return <X className="h-6 w-6 text-destructive mx-auto" />;
    return <span className="text-muted-foreground capitalize">{value}</span>;
  };

  return (
    <section id="compare" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How Marketti.io Stacks Up</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">See why businesses are choosing Marketti.io over the competition.</p>
        </div>
        <Card className="shadow-lg">
          <CardContent className="p-0">
             <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[40%] text-lg font-semibold">Feature</TableHead>
                    <TableHead className="text-center text-lg font-semibold text-primary">Marketti.io</TableHead>
                    <TableHead className="text-center text-lg font-semibold">Kylas</TableHead>
                    <TableHead className="text-center text-lg font-semibold">Zoho</TableHead>
                    <TableHead className="text-center text-lg font-semibold">Salesforce</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {comparisonData.map((row) => (
                    <TableRow key={row.feature} className="text-base">
                        <TableCell className="font-medium">{row.feature}</TableCell>
                        <TableCell className="text-center">{renderCheck(row.marketti)}</TableCell>
                        <TableCell className="text-center">{renderCheck(row.kylas)}</TableCell>
                        <TableCell className="text-center">{renderCheck(row.zoho)}</TableCell>
                        <TableCell className="text-center">{renderCheck(row.salesforce)}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Comparison;
