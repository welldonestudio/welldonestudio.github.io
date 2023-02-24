export type CardInfo = {
    title: string;
    description: string;
    imgUrl: string;
    tags: TagType[];
    url: string;
};

export const CardInfos: CardInfo[] = [
    {
        title: 'WELLDONE Code(1) — Remix IDE plugin for Multichain',
        description: 'Introducing WELLDONE Code (Remix IDE Plugin) to NEAR Protocol Medium.',
        imgUrl: 'https://miro.medium.com/max/634/1*aUYd5CuQyRgLAtZzFjizGQ.png',
        tags: ['near', 'welldonecode', 'remix'],
        url:
            'https://medium.com/nearprotocol/welldone-code-1-remix-ide-plugin-for-multichain-4b5228419ce5'
    },
    {
        title: 'WELLDONE Code(2) — Don’t trust, verify.',
        description: 'Introducing WELLDONE Code (Verification) to NEAR Protocol Medium.',
        imgUrl: 'https://miro.medium.com/max/1400/1*LR30Oix1WNjarT4yBmIkSQ.webp',
        tags: ['near', 'welldonecode', 'verification'],
        url: 'https://medium.com/nearprotocol/welldone-code-2-dont-trust-verify-92a7ae2fe0b2'
    }
];

export type TagType = 'near' | 'welldonecode' | 'remix' | 'verification';

export const Tags: { [type in TagType]: { color: string; name: string } } = {
    near: {
        color: '',
        name: 'NEAR'
    },
    welldonecode: {
        color: '',
        name: 'WELLDONE Code'
    },
    remix: {
        color: '',
        name: 'Remix'
    },
    verification: {
        color: '',
        name: 'Code Verification'
    }
};
