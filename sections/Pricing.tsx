import { type Benefit } from "../loaders/ServiceBenefitList.ts";

export interface Plan {
    planType: string;
    price: number;
    /**
    * @description Benefits of the plan.
    */
    uncoveredBenefits?: string;
}

export interface Pricing { 
    subcriptionType: "Monthly" | "Yearly";
    plans: Plan[];
    benefits: Benefit[];
}

function createDefaultPricing(plans?: Plan[]): Plan[] {
    const defaultPlan: Plan = {
        planType: 'Standard',
        price: 100
    };
    const basicPlan: Plan = {
        planType: 'Basic',
        price: 200
    };
    return plans ? plans : [defaultPlan, basicPlan];
}

function listPlanBenefits(benefits: Benefit[] | null) { 
    return (
        <div class="flex justify-center">
            <ul class="text-left">
                {benefits?.map(benefit => {
                    return <p class="text-gray-600 mb-4">{benefit.description}
                        <span class="badge badge-accent mx-2">{benefit?.tag}</span></p>
                })}
            </ul>
        </div>
    );
}

function getCardFor(plan: Plan, benefits: Benefit[]) { 
    return (
        <div class="flex-1 bg-gray-200 rounded-lg p-6 text-center">
            <h2 class="text-2xl font-semibold mb-4">{plan.planType}</h2>
            <p class="text-3xl font-bold mb-4">{plan.price}</p>
            { listPlanBenefits(benefits) }
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Choose Plan</button>
        </div>
    );
}

export default function Pricing({ subcriptionType = 'Monthly', plans = [], benefits}: Pricing) {
    
    const pricing = createDefaultPricing(plans); 

    return (
        <div class="bg-gray-100 min-h-screen flex items-center justify-center">

            <div class="text-center">
                <p>{subcriptionType}</p>
            </div>

            <div class="max-w-screen-lg w-full p-4 bg-white rounded-lg shadow-lg flex flex-col md:flex-row md:space-x-4">

                {pricing.map(plan => getCardFor(plan, benefits))}
    
            </div>
        </div>
    );
}