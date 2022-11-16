module.exports = async function (context) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const foundMonsters = [
        {
            _id: "4b9c0b3d-357e-4faa-91cf-be83d9bf2ac9",
            name: "Aarakocra",
            ac: 13,
            hp: 12,
            attacks: [
                {
                    attackName: "Talon",
                    attackDamage: "4",
                    attackToHit: "1d4+2"
                },
                {
                    attackName: "Javelin",
                    attackDamage: "4",
                    attackToHit: "1d6+2"
                }
            ],
            meta: {
                legacy: true
            }
        },
        {
            _id: "04a261ad-351c-4f4c-9a7d-56fa945a4d55",
            name: "Aboleth",
            ac: 135,
            hp: 17,
            attacks: [
                {
                    attackName: "Tentacle",
                    attackDamage: "9",
                    attackToHit: "2d6+5"
                },
                {
                    attackName: "Tail",
                    attackDamage: "9",
                    attackToHit: "3d6+5"
                }
            ],
            meta: {
                legacy: true
            }
        }
    ]

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: foundMonsters
    };
}