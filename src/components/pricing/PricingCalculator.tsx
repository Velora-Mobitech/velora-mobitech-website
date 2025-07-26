import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Calculator, Car, Users, Clock, MapPin, Zap } from 'lucide-react';

interface CalculatorInputs {
  employeeCount: number;
  shifts: number;
  distance: number;
  vehicleType: 'sedan' | 'suv' | 'tempo';
  frequency: 'daily' | 'weekly' | 'monthly';
  hasAC: boolean;
  hasGPS: boolean;
}

export const PricingCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    employeeCount: 50,
    shifts: 1,
    distance: 20,
    vehicleType: 'sedan',
    frequency: 'daily',
    hasAC: true,
    hasGPS: true,
  });

  const calculateEstimate = (): number => {
    // Base price per km
    const kmRate = {
      sedan: 12,
      suv: 15,
      tempo: 20,
    }[inputs.vehicleType];

    // Basic calculation
    let estimate = inputs.distance * kmRate;
    
    // Multiply by shifts
    estimate *= inputs.shifts;
    
    // Vehicle capacity adjustments
    const vehicleCapacity = {
      sedan: 4,
      suv: 6,
      tempo: 12,
    }[inputs.vehicleType];
    
    const vehiclesNeeded = Math.ceil(inputs.employeeCount / vehicleCapacity);
    estimate *= vehiclesNeeded;

    // Frequency multiplier
    const frequencyMultiplier = {
      daily: 30,
      weekly: 4,
      monthly: 1,
    }[inputs.frequency];
    
    estimate *= frequencyMultiplier;

    // Add premium features
    if (inputs.hasAC) estimate *= 1.2;
    if (inputs.hasGPS) estimate *= 1.1;

    return Math.round(estimate);
  };

  const savingsEstimate = (): number => {
    const regularCost = calculateEstimate() * 1.4; // Assuming 40% savings
    return Math.round(regularCost - calculateEstimate());
  };

  return (
    <section className="py-24 bg-background" id="calculator">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal mb-4">
            Calculate Your <span className="text-gradient font-medium">Transport Costs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get an instant estimate of your company's transportation costs and potential savings with Velora's smart mobility solutions.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="employees">Number of Employees</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="employees"
                    type="number"
                    value={inputs.employeeCount}
                    onChange={(e) => setInputs({...inputs, employeeCount: parseInt(e.target.value) || 0})}
                    className="pl-10"
                    min="1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shifts">Number of Shifts</Label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="shifts"
                    type="number"
                    value={inputs.shifts}
                    onChange={(e) => setInputs({...inputs, shifts: parseInt(e.target.value) || 1})}
                    className="pl-10"
                    min="1"
                    max="3"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="distance">Average Distance (km)</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="distance"
                    type="number"
                    value={inputs.distance}
                    onChange={(e) => setInputs({...inputs, distance: parseInt(e.target.value) || 0})}
                    className="pl-10"
                    min="1"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="vehicleType">Vehicle Type</Label>
                <Select
                  value={inputs.vehicleType}
                  onValueChange={(value: any) => setInputs({...inputs, vehicleType: value})}
                >
                  <SelectTrigger>
                    <Car className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sedan">Sedan (4 Seater)</SelectItem>
                    <SelectItem value="suv">SUV (6 Seater)</SelectItem>
                    <SelectItem value="tempo">Tempo Traveller (12 Seater)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="frequency">Service Frequency</Label>
                <Select
                  value={inputs.frequency}
                  onValueChange={(value: any) => setInputs({...inputs, frequency: value})}
                >
                  <SelectTrigger>
                    <Calculator className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily Service</SelectItem>
                    <SelectItem value="weekly">Weekly Service</SelectItem>
                    <SelectItem value="monthly">Monthly Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="ac">Air Conditioning</Label>
                  <Switch
                    id="ac"
                    checked={inputs.hasAC}
                    onCheckedChange={(checked) => setInputs({...inputs, hasAC: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="gps">GPS Tracking</Label>
                  <Switch
                    id="gps"
                    checked={inputs.hasGPS}
                    onCheckedChange={(checked) => setInputs({...inputs, hasGPS: checked})}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 glass rounded-xl text-center">
                <h3 className="text-lg font-medium mb-2">Estimated Monthly Cost</h3>
                <p className="text-4xl font-bold text-primary">
                  ₹{calculateEstimate().toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  with Velora's Smart Solutions
                </p>
              </div>

              <div className="p-6 glass rounded-xl text-center">
                <h3 className="text-lg font-medium mb-2">Potential Monthly Savings</h3>
                <p className="text-4xl font-bold text-green-500">
                  ₹{savingsEstimate().toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  vs Traditional Transport
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                *This is an approximate estimate. Contact us for a detailed quote and customized solutions.
              </p>
              <Button className="button-gradient">
                Get Detailed Quote <Zap className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingCalculator;
