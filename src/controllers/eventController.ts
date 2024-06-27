import { Request, Response } from 'express';
import { Event } from '../models/Event';
import { v4 as uuidv4 } from 'uuid';
import { sendResponse, sendErrorResponse } from '../utils/response';

let events: Event[] = [];

export const addEvent = (req: Request, res: Response) => {
  try {
    const newEvent: Event = {
      id: uuidv4(),
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    events.push(newEvent);
    return sendResponse(req, res, 200, 'Event created successfully', newEvent);
  } catch (error) {
    return sendErrorResponse(req, res, 500, error);
  }
};

export const updateEvent = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const eventIndex = events.findIndex(event => event.id === id);

    if (eventIndex === -1) {
      return sendErrorResponse(req, res, 404, new Error('Event not found'));
    }

    events[eventIndex] = {
      ...events[eventIndex],
      ...req.body,
      updatedAt: new Date()
    };

    return sendResponse(req, res, 200, 'Event updated successfully', events[eventIndex]);
  } catch (error) {
    return sendErrorResponse(req, res, 500, error);
  }
};

export const deleteEvent = (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const eventIndex = events.findIndex(event => event.id === id);
  
      if (eventIndex === -1) {
        return sendErrorResponse(req, res, 404, new Error('Event not found'));
      }
  
      const deletedEvent = events.splice(eventIndex, 1)[0];
      console.log("Deleted Event:", deletedEvent);
  
      return sendResponse(req, res, 204, 'Event deleted successfully');
    } catch (error) {
      return sendErrorResponse(req, res, 500, error);
    }
  };


export const getEventById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const event = events.find(event => event.id === id);

    if (!event) {
      return sendErrorResponse(req, res, 404, new Error('Event not found'));
    }

    return sendResponse(req, res, 200, 'Event retrieved successfully', event);
  } catch (error) {
    return sendErrorResponse(req, res, 500, error);
  }
};

export const listEvents = (req: Request, res: Response) => {
  try {
    return sendResponse(req, res, 200, 'Events retrieved successfully', events);
  } catch (error) {
    return sendErrorResponse(req, res, 500, error);
  }
};
