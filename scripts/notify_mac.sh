#!/bin/bash
# Native macOS Notification Trigger for ProdDaily PM Accelerator

TITLE="${1:-ProdDaily PM Drop}"
MESSAGE="${2:-Your daily 5-minute PM product teardown is ready.}"
SOUND="${3:-Subtle}"

osascript -e "display notification \"$MESSAGE\" with title \"$TITLE\" sound name \"$SOUND\""
