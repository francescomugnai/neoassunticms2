#!/bin/bash
cd /opt/neoassunti2024-cms 
php please ssg:generate --workers=4
chmod -R g+r,g+w /opt/neoassunti2024-cms/app/static
