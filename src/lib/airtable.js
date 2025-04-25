const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const AIRTABLE_ROOMS_ID = process.env.NEXT_PUBLIC_AIRTABLE_ROOMS_ID;

export const fetchRooms = async () => {
    const res = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Rooms?view=Grid%20view`,
        {
        headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        },
        cache: 'no-store',
        }
    );

    if (!res.ok) {
        console.error("Failed to fetch Airtable records", res.status, res.statusText);
        return [];
    }

    const data = await res.json();
    const records = data.records;

    console.log("Airtable.js ", records)
    return records.map(record => {
        const { fields, id } = record;

        return {
            id,
            room: fields.room,
            type: fields.type?.toLowerCase(),
            images: fields.images || [],
            availableFrom: new Date(fields.check_in),
            availableUntil: new Date(fields.check_out),
            price: fields.price,
            capacity: fields.capacity,
            occupied: fields.occupied
        };
    });
    
};
