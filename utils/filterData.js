export const filterData = [
    {
      items: [
        { label: 'Buy', value: 'for-sale' },
        { label: 'Rent', value: 'for-rent' },
      ],
      placeholder: 'Purpose',
      querylabel: 'purpose',
    },
    {
      items: [
        { label: 'Daily', value: 'daily' },
        { label: 'Weekly', value: 'weekly' },
        { label: 'Monthly', value: 'monthly' },
        { label: 'Yearly', value: 'yearly' },
      ],
      placeholder: 'Rent Frequency',
      querylabel: 'rentFrequency',
    },
    {
      items: [
        { label: '10,000', value: '10000' },
        { label: '20,000', value: '20000' },
        { label: '30,000', value: '30000' },
        { label: '40,000', value: '40000' },
        { label: '50,000', value: '50000' },
        { label: '60,000', value: '60000' },
        { label: '85,000', value: '85000' },
      ],
      placeholder: 'Min Price(AED)',
      querylabel: 'minPrice',
    },
    {
      items: [
        { label: '50,000', value: '50000' },
        { label: '60,000', value: '60000' },
        { label: '85,000', value: '85000' },
        { label: '110,000', value: '110000' },
        { label: '135,000', value: '135000' },
        { label: '160,000', value: '160000' },
        { label: '185,000', value: '185000' },
        { label: '200,000', value: '200000' },
        { label: '300,000', value: '300000' },
        { label: '400,000', value: '400000' },
        { label: '500,000', value: '500000' },
        { label: '600,000', value: '600000' },
        { label: '700,000', value: '700000' },
        { label: '800,000', value: '800000' },
        { label: '900,000', value: '900000' },
        { label: '1000,000', value: '1000000' },
      ],
      placeholder: 'Max Price(AED)',
      querylabel: 'maxPrice',
    },
    {
      items: [
        { label: 'Lowest Price', value: 'price-asc' },
        { label: 'Highest Price', value: 'price-des' },
        { label: 'Newest', value: 'date-asc' },
        { label: 'Oldest', value: 'date-desc' },
        { label: 'Verified', value: 'verified-score' },
        { label: 'City Level Score', value: 'city-level-score' },
      ],
      placeholder: 'Sort',
      querylabel: 'sort',
    },
    {
      items: [
        { label: '1000', value: '1000' },
        { label: '2000', value: '2000' },
        { label: '3000', value: '3000' },
        { label: '4000', value: '4000' },
        { label: '5000', value: '5000' },
        { label: '10000', value: '10000' },
        { label: '20000', value: '20000' },
      ],
      placeholder: 'Max Area(sqft)',
      querylabel: 'areaMax',
    },
    {
      items: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
      ],
      placeholder: 'Rooms',
      querylabel: 'roomsMin',
    },
    {
      items: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
      ],
      placeholder: 'Baths',
      querylabel: 'bathsMin',
    },
    {
      items: [
        { label: 'Furnished', value: 'furnished' },
        { label: 'Unfurnished', value: 'unfurnished' },
      ],
      placeholder: 'Furnish Type',
      querylabel: 'furnishingStatus',
    },
    {
      items: [
        { label: 'Apartment', value: '4' },
        { label: 'Townhouses', value: '16' },
        { label: 'Villas', value: '3' },
        { label: 'Penthouses', value: '18' },
        { label: 'Hotel Apartments', value: '21' },
        { label: 'Villa Compound', value: '19' },
        { label: 'Residential Plot', value: '14' },
        { label: 'Residential Floor', value: '12' },
        { label: 'Residential Building', value: '17' },
      ],
      placeholder: 'Property Type',
      querylabel: 'categoryExternalID',
    },
  ];
  
  export const getFilterValues = (filterValues) => {
    const {
      purpose,
      rentFrequency,
      categoryExternalID,
      minPrice,
      maxPrice,
      areaMax,
      roomsMin,
      bathsMin,
      sort,
      locationExternalIDs,
    } = filterValues;
  
    const values = [
      {
        label: 'purpose',
        value: purpose,
      },
      {
        label: 'rentFrequency',
        value: rentFrequency,
      },
      {
        label: 'minPrice',
        value: minPrice,
      },
      {
        label: 'maxPrice',
        value: maxPrice,
      },
      {
        label: 'areaMax',
        value: areaMax,
      },
      {
        label: 'roomsMin',
        value: roomsMin,
      },
      {
        label: 'bathsMin',
        value: bathsMin,
      },
      {
        label: 'sort',
        value: sort,
      },
      {
        label: 'locationExternalIDs',
        value: locationExternalIDs,
      },
      {
        label: 'categoryExternalID',
        value: categoryExternalID,
      },
    ];
  
    return values;
  };