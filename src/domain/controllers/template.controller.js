import Logger from '../../loaders/logger.js';
import * as service from '../services/template.service.js';

const entity = 'Template';
const collectionName = 'plantilla';
const genre = 'la';

const getAll = async (req, res, next) => {
  try {
    const allItems = await service.getAll();
    return res.status(200).json(allItems);
  } catch (error) {
    Logger.error(`[${entity} Controller Layer] Error obteniendo todas ${genre}s ${collectionName}s`, error);
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await service.getById(id);
    return res.status(200).json(item);
  } catch (error) {
    Logger.error(`[${entity} Controller Layer] Error obteniendo ${genre} ${collectionName} con id %s %o`, id, error);
    return next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { body } = req;
    const created = await service.create(body);
    return res.status(201).json(created);
  } catch (error) {
    Logger.error(`[${entity} Controller Layer] Error creando ${genre} ${collectionName} - %o`, error);
    return next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const edited = await service.edit(id, body);
    return res.status(200).json(edited);
  } catch (error) {
    Logger.error(`[${entity} Controller Layer] Error editando ${genre} ${collectionName} con id %s - %o`, id, error);
    return next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await service.deleteOne(id);

    if (!deleted) {
      const error = new Error(`No se ha encontrado ${genre} ${collectionName} con esa ID`);
      error.status = 404;
      throw error;
    }

    return res.status(204).json(deleted);
  } catch (error) {
    Logger.error(`[${entity} Controller Layer] Error eliminando ${genre} ${collectionName} con id %s - %o`, id, error);
    return next(error);
  }
};

export default {
  getAll,
  getById,
  create,
  edit,
  deleteOne,
};
