import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import CamperVansPagePreview from './preview-templates/CamperVansPagePreview';
import CamperVansPostPreview from './preview-templates/CamperVansPostPreview';
import FAQPagePreview from './preview-templates/FAQPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('camper-vans', CamperVansPagePreview);
CMS.registerPreviewTemplate('camper-vans', CamperVansPostPreview);
CMS.registerPreviewTemplate('FAQ', FAQPagePreview);
