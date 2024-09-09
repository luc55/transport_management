// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

// import dbConnect from "../../../utils/dbConnect";
// import User from "../../../models/User";
// import { getSession } from "next-auth/client";
// import { NextApiRequest, NextApiResponse } from "next";
// import { getSession } from "next-auth/client";
// import { NextApiRequest, NextApiResponse } from "next";


// export default async function handler(req, res) {
//     const { method } = req;
//     await dbConnect();
//     switch (method) {
//         case "GET":
//             try {
//                 const users = await User.find({});
//                 res.status(200).json({ success: true, data: users });
//             } catch (error) {
//                 res.status(400).json({ success: false });
//             }
//             break;
//         case "POST":
//             try {
//                 const user = await User.create(req.body);
//                 res.status(201).json({ success: true, data: user });
//             } catch (error) {
//                 res.status(400).json({ success: false });
//             }
//             break;
//         case "PUT":
//             try {
//                 const user = await User.findByIdAndUpdate(req
//                     .query.id, req.body, {
//                     new: true,
//                     runValidators: true,
//                 });
//                 if (!user) {
//                     return res.status(400).json({ success: false });
//                 }
//                 res.status(200).json({ success: true, data: user });
//             } catch (error) {
//                 res.status(400).json({ success: false });
//             }
//             break;
//         case "DELETE":
//             try {
//                 const deletedUser = await User.deleteOne
//                     ({ _id: req.query.id });
//                 if (!deletedUser) {
//                     return res.status(400).json({ success: false });
//                 }
//                 res.status(200).json({ success: true, data: {} });
//             } catch (error) {
//                 res.status(400).json({ success: false });
//             }
//             break;
//         default:
//             res.status(400).json({ success: false });
//             break;
//     }
// }
