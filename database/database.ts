import mongoose from 'mongoose'

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */

const mongoConnection = {
    isConnected: 0,
}

export const connect = async (): Promise<void> => {
    if (mongoConnection.isConnected) {
        console.log('Is connected')
        return
    }

    if (mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState

        if (mongoConnection.isConnected === 1) {
            console.log('This app is using the last connection')
            return
        }

        await mongoose.disconnect()
    }

    await mongoose.connect(process.env.MONGO_URL || '')
    mongoConnection.isConnected = 1
    console.log('MongoDB is connected')
}

export const disconnect = async (): Promise<void> => {
    if (process.env.NODE_ENV === 'development') {
        return
    }

    if (mongoConnection.isConnected === 0) {
        return
    }

    await mongoose.disconnect()
    mongoConnection.isConnected = 0
    console.log('MongoDB is disconnected')
}
