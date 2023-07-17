
export {
    saveToStorage,
    query,
    getByID,
    put
}

async function saveToStorage(entityType, entitys) {
    const jsonEntitys = JSON.stringify(entitys)
    localStorage.setItem(entityType, jsonEntitys)
    const newList = await query(entityType)
    return newList
}

async function query(entityType, floor = null) {
    let entitys = await JSON.parse(localStorage.getItem(entityType))
    if (entitys && floor) {
        entitys = entitys.filter(entity => entity.floor === floor)
    }
    return entitys
}

async function getByID(entityType, entityId) {
    const entitys = await query(entityType)
    const entity = entitys.find(entity => entity._id === entityId)
    return entity
}

async function put(entityType, entity) {
    const entitys = await query(entityType)
    const idx = entitys.findIndex(curEntity => curEntity._id === entity._id)
    entitys.splice(idx, 1, entity)
    saveToStorage(entityType, entitys)

    const newEntity = await getByID(entityType, entity._id)
    return newEntity
}

