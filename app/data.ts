const data = {
    company: {
      name: "Acme Corp",
      address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      employees: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "John Doe",
          department: "Sales",
          projects: [
            {
              id: 1,
              name: "Project A",
              startDate: "2022-01-01",
              endDate: "2022-06-30",
            },
            {
              id: 2,
              name: "Project B",
              startDate: "2023-02-15",
              endDate: null,
            },
          ],
        },
        {
          id: 2,
          
          url: "https://images.unsplash.com/photo-1618535263244-0185e50e667e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Jane Smith",

          department: "Engineering",
          projects: [
            {
              id: 3,
              name: "Project C",
              startDate: "2022-05-01",
              endDate: "2023-03-31",
            },
          ],
        },
        {
          id: 3,
          
          url: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Bob Johnson",
          department: "Marketing",
          projects: [],
        },
      ],
    },
  };

  export default data;