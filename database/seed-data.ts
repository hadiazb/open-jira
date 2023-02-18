interface SeedData {
    entries: SeedEntry[]
}

interface SeedEntry {
    name: string
    description: string
    status: string
    createAt: number
}

export const seedData: SeedData = {
    entries: [
        {
            name: 'Task 1',
            description: 'Esta es una prueba rapida para una tarea de tipo pendiente',
            status: 'pending',
            createAt: new Date(2022, 6, 2).getTime(),
        },
        {
            name: 'Task 2',
            description: 'Esta es una prueba rapida para una tarea de tipo pendiente',
            status: 'pending',
            createAt: new Date(2022, 10, 23).getTime(),
        },
        {
            name: 'Task 3',
            description: 'Esta es una prueba rapida para una tarea de tipo in-progress',
            status: 'in-progress',
            createAt: new Date(2022, 12, 21).getTime(),
        },
        {
            name: 'Task 4',
            description: 'Esta es una prueba rapida para una tarea de tipo finished',
            status: 'finished',
            createAt: new Date(2023, 3, 2).getTime(),
        },
    ],
}
