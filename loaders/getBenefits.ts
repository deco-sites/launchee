type Benefit = {
    description: string;
    /**
    * @description An optional tag for the benefit.
    */
    tag?: string;
}

export type BenefitList = Benefit[] | null;

export default async function getBenefits(): Promise<BenefitList> {
    return [
        {
            description: 'benefit 1'
        },
        {
            description: 'benefit 2',
            tag: 'unlimited'
        }
    ]
}