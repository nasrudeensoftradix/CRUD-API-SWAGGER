import express from "express";
const router = express.Router();

/**
 * @openapi
 * '/api/getUser':
 *  get:
 *     tags:
 *     - User
 *     summary: Get all user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  default: ok
 *       400:
 *         description: Bad request
 */

export const getUser = async (r, res) => {
  res.status(200).json({ message: "ok" });
};
