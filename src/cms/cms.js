import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ConditionPagePreview from './preview-templates/ConditionPagePreview';
import CamperVansPagePreview from './preview-templates/CamperVansPagePreview';
import CamperVansPostPreview from './preview-templates/CamperVansPostPreview';
import FAQPagePreview from './preview-templates/FAQPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import PricePagePreview from './preview-templates/PricePagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about-page', AboutPagePreview);
CMS.registerPreviewTemplate('blog-post', BlogPostPreview);
CMS.registerPreviewTemplate('condition-page', ConditionPagePreview);
CMS.registerPreviewTemplate('camper-vans-page', CamperVansPagePreview);
CMS.registerPreviewTemplate('camper-vans-post', CamperVansPostPreview);
CMS.registerPreviewTemplate('FAQ-page', FAQPagePreview);
CMS.registerPreviewTemplate('index-page', IndexPagePreview);
CMS.registerPreviewTemplate('price-page', PricePagePreview);
