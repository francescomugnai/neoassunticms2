#!/bin/bash
umask 022
umask -S
cd /opt/neoassunti2024-cms 
export USE_STATIC_TRUST_PROXIES=true
php please ssg:generate --workers=4
chmod -R g+rwX /opt/neoassunti2024-cms/storage/app/static

