import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import CamperVansPagePreview from './preview-templates/CamperVansPagePreview';
import FAQPagePreview from './preview-templates/FAQPagePreview';
import PricePagePreview from './preview-templates/PricePagePreview';
import ConditionsPagePreview from './preview-templates/ConditionPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('camper-vans', CamperVansPagePreview);
CMS.registerPreviewTemplate('FAQ', FAQPagePreview);
CMS.registerPreviewTemplate('prices', PricePagePreview);
CMS.registerPreviewTemplate('conditions', ConditionsPagePreview);
