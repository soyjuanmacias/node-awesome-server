import Logger from '../../loaders/logger.js';
import * as db from '../db/template.db.js';

const entity = 'Template';
const collectionName = 'plantilla';
const genre = 'la';

export const getAll = async() => {
  try {
    return await db.findAll();
  } catch (error) {
    Logger.error(`[${entity} Service Layer] Error obteniendo todas ${genre}s ${collectionName}s`, error);
    return next(error);
  }
};

export const getById = async id => {
  try {
    return await db.findById(id);
  } catch (error) {
    Logger.error(`[${entity} Service Layer] Error obteniendo ${genre} ${collectionName} con id %s %o`, id, error);
    return next(error);
  }
};

export const create = async data => {
  try {
    return await db.create(data);
  } catch (error) {
    Logger.error(`[${entity} Service Layer] Error creando ${genre} ${collectionName} - %o`, error);
    return next(error);
  }
};

export const edit = async (id, data) => {
  try {
    return await db.edit(id, data);
  } catch (error) {
    Logger.error(`[${entity} DB Data Layer] Error editando ${genre} ${collectionName} con id %s - %o`, id, error);
    return next(error);
  }
};

export const deleteOne = async id => {
  try {
    return await db.deleteOne(id);
  } catch (error) {
    Logger.error(`[${entity} DB Data Layer] Error eliminando ${genre} ${collectionName} con id %s - %o`, id, error);
    return next(error);
  }
};
