import React from 'react';

interface DrumLogoProps {
  className?: string;
}

const DrumLogo: React.FC<DrumLogoProps> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 94 94" 
    fill="none" 
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
  >
<circle cx="46" cy="58" r="20" fill="#FF3300"/>
<path d="M75.8701 9.26234C75.3652 9.39085 74.998 9.63871 74.741 10.0243L74.4932 10.4006L74.4656 13.7328L74.4381 17.0559L74.1535 17.111C73.9975 17.1385 73.5752 17.1661 73.2172 17.1661C72.1982 17.1661 69.4994 17.4231 67.8746 17.6801C63.0186 18.4237 60.2096 19.7639 60.5951 21.15C60.9531 22.426 64.3129 23.6377 69.1139 24.2344C70.6836 24.4272 72.9051 24.6016 73.8414 24.6016H74.4473V27.8053V31.009L74.1994 31.0641C74.0525 31.0916 70.3715 31.7342 66.0111 32.4961C61.6508 33.258 57.9422 33.9465 57.7678 34.02C57.3914 34.2036 57.1344 34.5248 56.9967 34.9746C56.9049 35.2684 56.9508 35.6356 57.2721 37.4623C57.4924 38.6465 57.676 39.6655 57.7035 39.7389C57.7402 39.8399 57.7035 39.8399 57.5383 39.7297C55.1148 38.1875 52.2324 37.1135 49.3408 36.6729C48.79 36.5903 48.2393 36.5077 48.1291 36.4801L47.918 36.4434V34.0108V31.5782H50.3322C52.4711 31.5782 52.7832 31.5506 53.1045 31.4037C54.3805 30.8254 54.509 28.962 53.3432 28.1358L52.9484 27.8604L46.3941 27.8329C42.0154 27.8145 39.7113 27.842 39.4727 27.9063C39.0137 28.0348 38.6006 28.3836 38.3619 28.8518C38.2059 29.1455 38.1783 29.3475 38.2059 29.834C38.2426 30.6143 38.5088 31.0274 39.1422 31.3487C39.592 31.5782 39.6287 31.5782 41.9695 31.5782H44.3379L44.3195 34.0291L44.292 36.4801L43.5117 36.5903C40.7211 36.9575 37.6275 38.059 35.4152 39.4635C35.1031 39.6655 34.8277 39.8123 34.8094 39.8032C34.8002 39.7848 34.9471 38.775 35.1582 37.5633C35.3602 36.3516 35.5254 35.1858 35.5254 34.9746C35.5254 34.4239 35.2867 33.9924 34.8461 33.7354C34.4238 33.4875 34.1117 33.4325 23.8213 31.67C20.8471 31.1651 18.2951 30.7245 18.1574 30.6969L17.9004 30.6418V26.6946C17.9004 23.1237 17.9187 22.7473 18.0473 22.8024C19.002 23.1696 23.2154 24.1518 25.0055 24.4364C26.465 24.6567 29.4484 24.7577 30.2379 24.6108C31.3854 24.3996 32.0371 23.9223 32.0371 23.2889C32.0371 22.2149 29.8156 20.278 26.5385 18.4971C21.2143 15.6147 14.5773 13.3748 8.53711 12.4293C6.97656 12.1815 3.83711 12.1815 3.08437 12.4293C2.35918 12.668 1.83594 13.1637 1.83594 13.5952C1.84512 14.9905 4.28691 17.01 8.49121 19.103C9.60195 19.6537 11.2727 20.4065 12.209 20.7829L13.9072 21.453L13.9348 25.7491L13.9531 30.036L13.4299 29.9625C12.6221 29.8432 12.1631 29.8799 11.8143 30.1002C11.2268 30.4582 11.1533 30.7245 10.4098 35.3418C10.0242 37.7377 9.73965 39.7481 9.76719 39.9133C9.82227 40.2621 10.1895 40.7854 10.4924 40.9598C10.6025 41.0241 11.4195 41.226 12.3008 41.4004L13.9072 41.7309L13.9348 56.7305L13.9531 71.7393L9.32656 76.375C4.48887 81.2127 4.31445 81.4147 4.31445 82.1582C4.31445 82.81 4.86523 83.6086 5.48027 83.8657C6.00352 84.086 6.70117 84.0309 7.16934 83.728C7.38965 83.5811 8.93184 82.094 10.6025 80.4233C12.2641 78.7526 13.6502 77.3848 13.6869 77.3848C13.7145 77.3848 13.742 78.725 13.7512 80.3682C13.7512 82.3143 13.7879 83.4618 13.8613 83.6729C13.9164 83.8381 14.1184 84.1227 14.3111 84.2971C15.0088 84.9305 16.1654 84.9489 16.8723 84.3246C17.4322 83.8289 17.4414 83.7739 17.4414 80.3498V77.2471L20.6818 80.4784C22.4535 82.25 24.0416 83.7647 24.2068 83.8473C24.5648 84.0309 25.3268 84.0401 25.7307 83.8657C26.3457 83.6086 26.8965 82.81 26.8965 82.1582C26.8965 81.4147 26.7129 81.2036 21.8844 76.375L17.2578 71.7393V57.0243C17.2578 48.937 17.2854 42.3184 17.3221 42.3184C17.4322 42.3184 29.0537 44.3471 29.0721 44.3746C29.0812 44.3838 28.7783 44.8061 28.402 45.3018C26.1529 48.2852 24.7668 51.7092 24.2252 55.6289C24.0416 56.9141 24.0691 59.925 24.2711 61.2745C25.1799 67.3789 28.5213 72.7215 33.5793 76.1639C33.9924 76.4485 34.332 76.7147 34.332 76.7606C34.332 76.7973 33.7353 78.0274 33.0102 79.487C31.5873 82.3235 31.4771 82.6723 31.6607 83.4709C31.9453 84.701 33.0652 85.2059 33.9832 84.5174C34.3412 84.2512 34.5248 83.9299 35.865 81.2862C36.682 79.6705 37.3613 78.3211 37.3797 78.2752C37.398 78.2385 37.701 78.3303 38.0498 78.4772C39.0596 78.8995 40.6936 79.3676 41.9971 79.5971C43.0252 79.7807 43.4934 79.8174 45.4395 79.8174C46.8439 79.8174 47.9822 79.7715 48.4688 79.6981C50.0201 79.4594 51.9111 78.927 53.2422 78.3579L53.5727 78.2202L54.9863 81.075C56.4459 83.9942 56.6662 84.3705 57.0885 84.5817C58.2635 85.1784 59.4844 84.3063 59.4844 82.8743C59.4844 82.6172 59.1264 81.8186 58.0615 79.6797C57.2812 78.11 56.6387 76.7973 56.6387 76.7606C56.6387 76.7147 57.0426 76.4118 57.5383 76.0721C62.4035 72.7858 65.7633 67.4157 66.6904 61.458C66.9016 60.127 66.9658 57.7219 66.8373 56.3633C66.4059 51.9387 64.7811 47.9639 61.9537 44.4664C61.8986 44.4022 62.3209 44.292 63.2756 44.1268C66.5252 43.5485 73.5844 42.3184 73.6486 42.3184C73.6853 42.3184 73.7129 48.9186 73.7129 56.9875V71.6475L69.068 76.2832C66.516 78.8352 64.3771 81.02 64.3129 81.1485C63.8631 82.0205 64.2578 83.1588 65.185 83.627C65.6164 83.8473 66.36 83.8657 66.7639 83.6637C66.9291 83.5811 68.5172 82.0664 70.298 80.2948L73.5293 77.0635V80.1387C73.5293 82.9477 73.5477 83.2506 73.7037 83.5903C74.3096 84.9213 76.3658 84.9213 77.0818 83.5995C77.2287 83.3424 77.2471 82.9569 77.2746 80.1938L77.3021 77.0727L80.5793 80.3498C82.3785 82.1491 83.9758 83.6637 84.1135 83.7188C85.2242 84.1227 86.5186 83.3332 86.6379 82.1766C86.7205 81.2586 86.8307 81.3871 81.7818 76.3291L77.1094 71.6475V56.5928V41.5381L78.468 41.2719C79.2115 41.125 79.9459 40.969 80.1111 40.9231C80.7262 40.7579 81.2402 40.1061 81.2402 39.4911C81.2402 38.8852 79.8633 31.3762 79.6797 31.0366C79.4869 30.651 79.0738 30.3481 78.624 30.2563C78.4771 30.2287 78.0273 30.2563 77.6418 30.3205L76.9258 30.4491V27.5299V24.6016H77.6877C78.1008 24.6016 79.1197 24.5557 79.9551 24.5098C85.417 24.1702 89.3643 23.3715 91.1268 22.2241C91.7785 21.8018 92.0723 21.3795 92.0723 20.8471C92.0723 19.6446 89.502 18.4696 85.3344 17.7627C83.6637 17.4782 81.791 17.2762 80.2305 17.212C79.5512 17.1844 78.8168 17.1385 78.6057 17.111L78.2109 17.0651V13.9164C78.2109 10.6668 78.1834 10.4098 77.8254 9.88656C77.4857 9.40922 76.5219 9.0971 75.8701 9.26234ZM49.708 40.7028C55.684 41.9787 60.4482 45.9995 62.6973 51.6633C64.0283 55.0139 64.2578 58.9887 63.3398 62.5596C62.0271 67.636 58.4838 71.9412 53.7471 74.2178C52.3242 74.8971 50.6076 75.4295 48.8359 75.7508C47.9088 75.9161 44.2645 75.9161 43.3281 75.7508C41.5564 75.4387 39.6746 74.8237 38.2059 74.0893C30.908 70.4174 26.9699 62.4678 28.558 54.5733C29.7514 48.6616 34.0566 43.6127 39.7113 41.483C40.7762 41.0883 42.1348 40.7303 43.1445 40.5834C43.5209 40.5284 43.934 40.4641 44.0625 40.4457C44.191 40.4182 45.265 40.4182 46.4492 40.4366C48.3402 40.4641 48.7441 40.4916 49.708 40.7028Z" fill="white"/>
<path d="M50.3965 55.7666C48.5422 56.1797 46.899 57.6484 46.3482 59.3834C46.082 60.2279 46.0178 61.559 46.2105 62.3301C46.7246 64.3863 48.3586 65.9928 50.3597 66.415C53.2055 67.0209 56.0236 65.2859 56.7764 62.4678C56.9691 61.7609 56.9691 60.3381 56.7764 59.6312C56.299 57.8412 54.8853 56.4 53.0586 55.8676C52.3242 55.6473 51.1125 55.6014 50.3965 55.7666Z" fill="white"/>
</svg>

);

export default DrumLogo;