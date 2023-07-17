import io from 'socket.io-client'

export {
    socketService
}

const baseUrl = 'http://localhost:3030'
const socketService = createSocketService()

socketService.setup()

function createSocketService() {
    let socket
    const socketService = {
        setup() {
            socket = io(baseUrl)
        },
        on(eventName, cb) {
            socket.on(eventName, cb)
            console.log('on', eventName);

        },
        off(eventName, cb = null) {
            if (!socket) return
            console.log('off', eventName);
            if (!cb) socket.removeAllListeners(eventName)
            else socket.off(eventName, cb)
        },
        offAny() {
            if (!socket) return
            else socket.removeAllListeners()
        },
}
    return socketService
}