import mongoose, { Schema, type InferSchemaType } from "mongoose";
import type { GalleryCategory, MediaOrientation, ProjectCategory } from "@/admin/types";

const { models, model } = mongoose;

const timestamps = {
  createdAt: { type: String, required: true },
  updatedAt: { type: String, required: true },
};

const ProjectSchema = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    description: { type: String, default: "" },
    category: {
      type: String,
      required: true,
      enum: ["software", "videography", "design", "photography", "voixOff", "prints"],
    },
    logoUrl: String,
    linkUrl: String,
    videoUrl: String,
    thumbnailUrl: String,
    orientation: {
      type: String,
      enum: ["portrait", "landscape", "square"],
    },
    imageUrl: String,
    subcategoryId: String,
    sortOrder: { type: Number, default: 0, index: true },
    ...timestamps,
  },
  { versionKey: false },
);

const SubcategorySchema = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["design", "photography", "prints"],
    },
  },
  { versionKey: false },
);

const BrandSchema = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    logoUrl: { type: String, required: true },
    sortOrder: { type: Number, default: 0, index: true },
    ...timestamps,
  },
  { versionKey: false },
);

const TestimonialSchema = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    quote: { type: String, required: true },
    occupation: { type: String, required: true },
    company: { type: String, required: true },
    sortOrder: { type: Number, default: 0, index: true },
    ...timestamps,
  },
  { versionKey: false },
);

const StaffSchema = new Schema(
  {
    id: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    skill: { type: String, required: true },
    yearsExperience: { type: Number, default: null },
    photoUrl: { type: String, required: true },
    sortOrder: { type: Number, default: 0, index: true },
    ...timestamps,
  },
  { versionKey: false },
);

export type ProjectDoc = InferSchemaType<typeof ProjectSchema> & {
  category: ProjectCategory;
  orientation?: MediaOrientation;
};
export type SubcategoryDoc = InferSchemaType<typeof SubcategorySchema> & {
  category: GalleryCategory;
};
export type BrandDoc = InferSchemaType<typeof BrandSchema>;
export type TestimonialDoc = InferSchemaType<typeof TestimonialSchema>;
export type StaffDoc = InferSchemaType<typeof StaffSchema>;

export const ProjectModel = models.Project || model("Project", ProjectSchema);
export const SubcategoryModel = models.Subcategory || model("Subcategory", SubcategorySchema);
export const BrandModel = models.Brand || model("Brand", BrandSchema);
export const TestimonialModel = models.Testimonial || model("Testimonial", TestimonialSchema);
export const StaffModel = models.Staff || model("Staff", StaffSchema);
