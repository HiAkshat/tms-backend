import { Organisation } from "../models/organisationModel.mjs";
import { Request, Response } from "express";

const getOrganisations = async (req: Request, res: Response) => {
  try {    
    const data = await Organisation.find({})
    res.status(200).json(data)
    console.log("Organisation data retrieved!")
  } catch (e) {
    res.status(404).json(e)
  }
}

const getSortedOrganisations = async (req: Request, res: Response) => {
  try { 
    // const sortBy = req.query.sortBy || "display_name"; // Default sorting by display name
    // const sortOrder = req.query.sortOrder === "desc" ? -1 : 1;

    // const sortCriteria = {};
    // sortCriteria[sortBy] = sortOrder;

    // const data = await Organisation.find({}).sort(sortCriteria)
    const data = await Organisation.find({})
    res.status(200).json(data)
    console.log("Organisation data retrieved!")
  } catch (e) {
    res.status(404).json(e)
  }
}

const getOrganisation = async (req: Request, res: Response) => {
  try {
    const data = await Organisation.findById(req.params.id)
    res.status(200).json(data)
    console.log("Organisation data retrieved!")
  } catch (e) {
    res.status(404).json(e)
  }
}

const addOrganisation = async (req: Request, res: Response) => {
  try {
    const data = await Organisation.create(req.body)
    res.status(200).json(data)
    console.log("New organisation created!")
  } catch (e) {
    res.status(404).json({message: e})
  }
}

const editOrganisation = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { organisation_name, display_name } = req.body;

  try {
    const updatedOrganisation = await Organisation.findByIdAndUpdate(
      id,
      { organisation_name, display_name },
      { new: true }
    );

    if (!updatedOrganisation) {
      return res.status(404).json({ message: 'Organisation not found' });
    }

    res.status(200).json(updatedOrganisation);
    console.log('Organisation updated:', updatedOrganisation);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteOrganisation = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedOrganisation = await Organisation.findByIdAndDelete(id);

    if (!deletedOrganisation) {
      return res.status(404).json({ message: 'Organisation not found' });
    }

    res.status(200).json({ message: 'Organisation deleted successfully' });
    console.log('Organisation deleted:', deletedOrganisation);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export {getOrganisations, getOrganisation, addOrganisation, editOrganisation, deleteOrganisation, getSortedOrganisations}