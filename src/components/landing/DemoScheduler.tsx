"use client";

import { useState, useEffect, type ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { recommendDemoTime, type RecommendDemoTimeInput } from '@/ai/flows/recommend-demo-time';
import { Loader2 } from 'lucide-react';

export default function DemoScheduler({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ recommendedTime: string; reasoning: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBookDemo = async () => {
    setOpen(true);
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // In a real app, these would be tracked dynamically.
      const engagementData: RecommendDemoTimeInput = {
        timeSpentOnPage: timeSpent,
        sectionsViewed: ['hero', 'features', 'pricing'],
        elementsClicked: ['cta-button', 'feature-card-1'],
      };
      
      const response = await recommendDemoTime(engagementData);
      setResult(response);
    } catch (e) {
      setError('Failed to get a recommendation. Please try again.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div onClick={handleBookDemo} className="inline-block cursor-pointer">
        {children}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>AI-Powered Demo Scheduling</DialogTitle>
            <DialogDescription>
              Our AI has analyzed your engagement to suggest the best time for your demo.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 min-h-[150px] flex items-center justify-center">
            {loading && (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="ml-4 mt-4">Analyzing your activity...</p>
              </div>
            )}
            {error && <p className="text-destructive text-center">{error}</p>}
            {result && (
              <div className="space-y-4 text-center">
                <div>
                  <h3 className="font-semibold text-muted-foreground">Recommended Time:</h3>
                  <p className="text-2xl font-bold text-primary">{new Date(result.recommendedTime).toLocaleString([], { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-muted-foreground">Reasoning:</h3>
                  <p className="text-sm">{result.reasoning}</p>
                </div>
              </div>
            )}
          </div>
           <DialogFooter>
            <Button className="w-full" onClick={() => setOpen(false)} disabled={loading}>
              {loading ? 'Please wait...' : (result ? 'Confirm Demo Time' : 'Close')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
