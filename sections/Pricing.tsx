
export interface PlanBenefit {
    description: string;
    /**
    * @description An optional tag for the benefit.
    */
    tag?: string;
}

export interface Plan {
    planType: string;
    price: number;
    /**
    * @description Benefits of the plan.
    */
    benefits?: PlanBenefit[];
}

export interface Pricing { 
    subcriptionType: "Monthly" | "Yearly";
    plans: Plan[];
}

function createDefaultPlans(plans?: Plan[]): Plan[] {
    const defaultPlan: Plan = {
        planType: 'Standard',
        price: 100,
        benefits: [
            { description: 'Basic benefits', tag: 'basic' },
            { description: 'Basic benefits', tag: 'basic' }
        ]
    };
    const basicPlan: Plan = {
        planType: 'Basic',
        price: 200,
        benefits: [
            { description: 'Basic benefits', tag: 'basic' },
            { description: 'Basic benefits', tag: 'basic' },
            { description: 'Basic benefits', tag: 'basic' }
        ]
    };
    return plans ? plans : [defaultPlan, basicPlan];
}

export default function Plans({ plans = [] }: Pricing) {
    
    const allplans = createDefaultPlans(plans); 

    return (
        <div class="bg-gray-100 min-h-screen flex items-center justify-center">

            <div class="max-w-screen-lg w-full p-4 bg-white rounded-lg shadow-lg flex flex-col md:flex-row md:space-x-4">

                {allplans.map(plan => { 
                    return <div class="flex-1 bg-gray-200 rounded-lg p-6 text-center">
                        <h2 class="text-2xl font-semibold mb-4">{ plan.planType }</h2>
                        <p class="text-3xl font-bold mb-4">{plan.price}</p>
                        {plan.benefits?.map(benefit => {
                            return <p class="text-gray-600 mb-4">{benefit.description}
                                <span class="badge badge-accent">{benefit?.tag}</span></p>
                        })}
                        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Choose Plan</button>
                    </div>
                })}
                    
            </div>
        </div>
    );
}