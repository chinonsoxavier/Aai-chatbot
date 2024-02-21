export interface ButtonWidgetProp {
  title: String;
  type?: "button" | "submit";
  containerStyles?: string;
  id?:string
}

export type ImageDataType = any;

export interface NavbarLinks {
  title: string;
  url: string;
  subLinks?: NavbarLinks_subLinks[];
}

export interface NavbarLinks_subLinks {
  subLinksTitle: string;
}

export interface partners {
  baseImage: ImageDataType;
  image: ImageDataType;
  title: string;
}

export interface partnersEventProps {
  event?: string;
  partner?: string;
}

export interface TeamInterface {
  image: ImageDataType;
  name: string;
}

export interface FeedbacksInterface {
  image:ImageDataType;
  name:string;
  department:string
}
export interface WhyChooseUsInterface {
  image: ImageDataType;
  department: string;
  text: string;
}
export interface BlogsInterface {
  coverImage: ImageDataType;
  date: string;
  title:string;
  author: string;
  blogDetails:string;
  }
export interface OurServicesInterface {
  Image: ImageDataType;
  Icon: any;
  title:string;
  }