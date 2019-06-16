const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((elem) => {
    return (elem.length > 0 && elem.length != '')
});
employersNames = employersNames.map((elem) => {
    return elem.toLowerCase().trim();
});

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash({
    own = 0, 
    everyCash = []
    } = {}) {
    let total = own;
    total += everyCash.reduce((total, elem) => {
        return total += elem
    });
    return total;
}

const {cash} = sponsors;

const money = calcCash({
    own: null, 
    everyCash: cash
});

function makeBusiness2 ({
    owner,
    director = 'Victor',
    cash,
    emp
} = {}) {
    const {eu: eu, rus: rus} = sponsors;
    const sumSponsors = `${eu} ${rus} unexpected sponsor`;
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors: `);
    console.log(sumSponsors);
    const [srl] = eu;
    console.log(`Note. Be careful with ${srl}. It's a huge risk.`);
}

makeBusiness2({
    owner: 'Sam',
    cash: money,
    emp: employersNames
});