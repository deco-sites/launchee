export type Benefit = {
    description: string;
    /**
    * @description An optional tag for the benefit.
    */
    tag?: string;
}

export default async function ServiceBenefitList(): Promise<Benefit[] | null> {

    const data: Benefit[] = [
        {
            description: 'benefit 1'
        },
        {
            description: 'benefit 2',
            tag: 'unlimited'
        }
    ];

    return data;
}