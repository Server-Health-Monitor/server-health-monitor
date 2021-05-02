import subprocess

db_backup_command = "docker exec -t server-health-monitor-main_db_1 pg_dumpall -c -U postgres > dump_date.sql"
subprocess.call(db_backup_command, shell=True)