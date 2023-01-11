import { Template as Model } from '../models/index.js';
import Logger from '../../loaders/logger.js';

const entity = 'Template';
const collectionName = 'plantilla';
const genre = 'la'

export const findAll = async () => {
  try {
    return await Model.find().lean();
  } catch (error) {
    Logger.error(`[${entity} DB Data Layer] Error obteniendo todas ${genre}s ${collectionName}s`, error);
    return error;
  }
};

export const findById = async id => {
  try {
    return await Model.findById(id).lean();
  } catch (error) {
    Logger.error(`[${entity} DB Data Layer] Error obteniendo ${genre} ${collectionName} con id %s - %o`, id, error);
    return error;
  }
}

export const create = async data => {
  try {
    const newDocument = new Model(data);
    const created = await newDocument.save();
    return created.toJSON();
  } catch (error) {
    Logger.error(`[${entity} DB Data Layer] Error creando ${genre} ${collectionName} - %o`, error);
    return error;
  }
};

export const edit = async (id, data) => {
  try {
    const filter = { _id: id };
    Logger.info('id: %s', id);
    const update = { $set: {...data} };
    const options = { returnOriginal: false };
    return await Model.findOneAndUpdate(filter, update, options);
  } catch (error) {
    Logger.error(`[${entity} DB Data Layer] Error editando ${genre} ${collectionName} con id %s - %o`, id, error);
    return error;
  }
};

export const deleteOne = async id => {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (error) {
    Logger.error(`[${entity} DB Data Layer] Error eliminando ${genre} ${collectionName} con id %s - %o`, id, error);
    return error;
  }
};
